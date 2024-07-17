import {
  create_user,
  get_user,
  login_user,
  logout_user,
} from '../handlers/userHandler.js';
import { protect } from '../middleware/auth.js';
protect;

export const userRoutes = [
  {
    method: 'POST',
    path: '/api/',
    handler: create_user,
  },
  {
    method: 'GET',
    path: '/api/',
    options: {
      pre: [{ method: protect }],
      handler: get_user,
    },
  },
  {
    method: 'POST',
    path: '/api/login',
    handler: login_user,
  },
  {
    method: 'POST',
    path: '/api/logout',
    options: {
      pre: [{ method: protect }],
      handler: logout_user,
    },
  },
];
