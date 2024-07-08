import { nanoid } from 'nanoid';
import produks from './model/produk.js'

export const create_produk = async (request, h) => {
    const {
        nama,
        harga,
        link,
        stok,
        image,
        jenis,
        created_at,
        update_at,
    } = request.payload;

    if (!nama) {
        return h
        .response({
            status: 'fail',
            message:
            'Gagal menambahkan produk. nama tidak boleh lebih besar dari pageCount',
        })
        .code(400);
    }
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt 

    const newProduk = {
        id,
        nama,
        harga,
        link,
        stok,
        image,
        jenis,
        created_at,
        update_at,
      };
    
      produks.push(newProduk);
    
      const isSuccess = produks.filter((produk) => produk.id === id).length > 0;
    
      if (isSuccess) {
        return h
          .response({
            status: 'success',
            message: 'Produk berhasil ditambahkan',
            data: {
              produkId: id,
            },
          })
          .code(201);
      }
    
      return h
        .response({
          status: 'fail',
          message: 'Produk gagal ditambahkan',
        })
        .code(500);
}
export const get_produk = async (request, h) => {
    const produk = produks
    return h
      .response({
        status: 'success',
          data: produk
      })
      .code(200);
}
export const get_produk_by_id = async (request, h) => {
    const {id} = request.params
    const produk = produks.filter((p) => p.id === id)[0];
    if (produk){
      return h
      .response({
        status: 'success',
          data: {produk}
      })
      .code(200); 
    }
    return h
      .response({
        status: 'fail',
        message: 'produk tidak ditemukan'
      })
      .code(404); 
    }
export const delete_produk_by_id = async (request, h) => {
    const {id} = request.params
    const index = produks.findIndex((produk) => produk.id === id)
    if (index !== -1){
      produks.splice(index,1)
      return h
      .response({
        status: 'success',
        message: 'produk berhasil dihapus',
      })
      .code(200); 
    }
    return h
      .response({
        status: 'fail',
        message: 'produk tidak ditemukan'
      })
      .code(404); 
    }