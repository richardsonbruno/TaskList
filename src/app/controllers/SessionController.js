import jwt from 'jsonwebtoken';
import User from '../models/User';
import AuthConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    // Verifica se existe e-mail
    if (!user) {
      return res.status(401).json({ error: 'E-mail não existe.' });
    }

    // Verifica se a senha está correta
    if (!(await user.checkPassword(password))) {
      return res
        .status(401)
        .json({ error: 'Senha incorreta, verifique se digitou corretamente' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        email,
        name,
      },
      token: jwt.sign({ id }, AuthConfig.check, {
        expiresIn: AuthConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
