import { create_produk, get_produk, get_produk_by_id, delete_produk_by_id } from "./handler.js"

export const produkRoutes = [
    {
        method: 'POST',
        path: '/api/produk',
        handler: create_produk,
      },
    {
        method: 'GET',
        path: '/api/produk',
        handler: get_produk,
      },
    {
        method: 'GET',
        path: '/api/produk/{id}',
        handler: get_produk_by_id,
      },
    {
        method: 'DELETE',
        path: '/api/produk/{id}',
        handler: delete_produk_by_id,
      }
]