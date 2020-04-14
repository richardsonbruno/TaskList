import { Router } from 'express';

// Controle de Usuário
import UserController from './app/controllers/UserController';

// Controle de Sessão
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
