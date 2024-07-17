import Boom from '@hapi/boom';
import produks from '../model/produk.js';

export const create_produk = async (request, h) => {
  const { nama, harga, link, stok, image, jenis } = request.payload;

  if (!nama) {
    throw Boom.badRequest('Gagal menambahkan produk. nama tidak boleh kosong');
  }

  const newProduk = {
    nama,
    harga,
    link,
    stok,
    image,
    jenis,
  };

  console.log(newProduk);
  const produk = await produks.create(newProduk);
  return h
    .response({
      status: 'success',
      message: 'Produk berhasil ditambahkan',
      data: produk,
    })
    .code(200);
};

export const get_produk = async (request, h) => {
  const produk = await produks.find({});
  return h
    .response({
      status: 'success',
      data: produk,
    })
    .code(200);
};

export const get_produk_by_id = async (request, h) => {
  const { id } = request.params;
  // console.log('ID:', id);

  const produk = await produks.findOne({ _id: id });

  // console.log(produk);
  if (produk) {
    return h
      .response({
        status: 'success',
        data: { produk },
      })
      .code(200);
  }

  throw Boom.notFound('Id tidak ditemukan');
};

export const update_produk = async (request, h) => {
  const { nama, harga, link, stok, image, jenis } = request.payload;
  const { id } = request.params;

  const updateFields = {
    nama,
    harga,
    link,
    stok,
    image,
    jenis,
  };

  const requiredFields = ['nama', 'harga', 'link', 'stok', 'image', 'jenis'];
  if (requiredFields.every((field) => !updateFields[field])) {
    throw Boom.badRequest('Gagal update produk. tidak ada yang terisi');
  }

  const produk = await produks.findOneAndUpdate(
    { _id: id },
    { $set: updateFields }
  );

  if (produk) {
    return h
      .response({
        status: 'success',
        message: 'Produk berhasil diperbarui',
        data: produk,
      })
      .code(200);
  }
  throw Boom.notFound('Id tidak ditemukan');
};

export const delete_produk_by_id = async (request, h) => {
  try {
    const { id } = request.params;
    const index = await produks.deleteOne({ _id: id });
    // console.log(index);
    if (index) {
      return h
        .response({
          status: 'success',
          message: 'produk berhasil dihapus',
        })
        .code(200);
    }
    throw Boom.notFound('Id tidak ditemukan');
  } catch (e) {
    console.log(e);
  }
};
