import Jwt from 'jsonwebtoken';
import Users from '../model/user.js';
import 'dotenv/config';
import Boom from '@hapi/boom';

// import Cookies from "js-cookie";

const protect = async (request, h) => {
  const token = request.state.jwt; // Akses cookie 'jwt' dalam Hapi.js

  if (!token) {
    // Tidak ada token, kembalikan respons 401 Unauthorized
    throw Boom.unauthorized('Unauthorized');
  }

  try {
    // Verifikasi token
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    // Cari pengguna berdasarkan user_id dari token yang didekode
    const user = await Users.findOne({ user_id: decoded._id }).select(
      '-password'
    );

    if (!user) {
      // Jika pengguna tidak ditemukan, kembalikan respons 401 Unauthorized
      throw Boom.unauthorized('User not found');
    }

    // Tambahkan pengguna ke objek request
    request.user = user;
    // Lanjutkan ke handler berikutnya
    return h.continue;
  } catch (error) {
    // Jika ada error dalam proses verifikasi token atau pencarian pengguna, kembalikan respons 401 Unauthorized
    console.log(error);
    throw Boom.unauthorized('Invalid token');
  }
};

export { protect };
