import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/teste', async (req, res) => {
  const user = await User.create({
    name: 'Richardson Bruno',
    email: 'richardsonbrc@gmail.com',
    password_hash: '321321321',
  });
  return res.json(user);
});

export default routes;
