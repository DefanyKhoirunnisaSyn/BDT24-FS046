import {
  create_produk,
  get_produk,
  get_produk_by_id,
  update_produk,
  delete_produk_by_id,
  get_produk_by_jenis
} from '../handlers/produkHandler.js';
import { protect } from '../middleware/auth.js';

export const produkRoutes = [
  {
    method: 'POST',
    path: '/api/produk',
    options: {
      pre: [{ method: protect }],
      payload: {
        output: 'stream',
        allow: 'multipart/form-data',
        maxBytes: 1024 * 1024 * 10, // Maksimal 10 MB
        parse: true,
        multipart: true,
      },
      handler: create_produk,
    },
  },
  {
    method: 'GET',
    path: '/produk/{param*}',
    handler: {
      directory: {
        path: '././public/produk',
        redirectToSlash: true,
        index: false,
      },
    },
  },

  {
    method: 'GET',
    path: '/api/produk',
    options: {
      handler: get_produk,
    },
  },
  {
    method: 'GET',
    path: '/api/produk/{id}',
    options: {
      handler: get_produk_by_id,
    },
  },
  {
    method: 'GET',
    path: '/api/produk/jenis/{jenis}',
    options: {
      handler: get_produk_by_jenis,
    },
  },
  {
    method: 'PUT',
    path: '/api/produk/{id}',
    options: {
      pre: [{ method: protect }],
      payload: {
        output: 'stream',
        allow: 'multipart/form-data',
        maxBytes: 1024 * 1024 * 10, // Maksimal 10 MB
        parse: true,
        multipart: true,
      },
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
