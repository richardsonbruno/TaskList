import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ error: 'Você não está logado' });

  const [, token] = authorization.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.check);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
