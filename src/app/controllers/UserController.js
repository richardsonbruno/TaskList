import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) return res.status(400).json({ error: 'Usuário já existe' });
    const { id, name, email } = await User.create(req.body);
    return res.json({ id, name, email });
  }
}

export default new UserController();
