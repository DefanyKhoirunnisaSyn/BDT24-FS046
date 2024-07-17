import {
  create_produk,
  get_produk,
  get_produk_by_id,
  update_produk,
  delete_produk_by_id,
} from '../handlers/produkHandler.js';
import { protect } from '../middleware/auth.js';

export const produkRoutes = [
  {
    method: 'POST',
    path: '/api/produk',
    options: {
      pre: [{ method: protect }],
      handler: create_produk,
    },
  },
  {
    method: 'GET',
    path: '/api/produk',
    options: {
      pre: [{ method: protect }],
      handler: get_produk,
    },
  },
  {
    method: 'GET',
    path: '/api/produk/{id}',
    options: {
      pre: [{ method: protect }],
      handler: get_produk_by_id,
    },
  },
  {
    method: 'PUT',
    path: '/api/produk/{id}',
    options: {
      pre: [{ method: protect }],
      handler: update_produk,
    },
  },
  {
    method: 'DELETE',
    path: '/api/produk/{id}',
    options: {
      pre: [{ method: protect }],
      handler: delete_produk_by_id,
    },
  },
];
