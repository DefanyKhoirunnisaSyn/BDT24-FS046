import mongoose from 'mongoose';
const produkSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    stok: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    jenis: {
      type: String,
      enum: [
        'Polaroid',
        'Cetak Buku',
        'Cetak Stiker',
        'Cetak Poster',
        'Print A3+',
        'Cetak Banner',
        'Cetak Brosur',
        'Sablon',
        'Toner',
        'Spare Part',
        'Kartu Nama',
        'ID Card',
        'Kertas',
        'Mesin',
        'Developer',
        'Semua Produk',
      ],
    },
  },
  { timestamps: true }
);
const produks = mongoose.model('produks', produkSchema);
export default produks;
