import { Router } from 'express';

import AuthMiddleware from './app/middleware/auth';

// Controle de Usuário
import UserController from './app/controllers/UserController';

// Controle de Sessão
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);
routes.put('/users', UserController.update);

export default routes;
