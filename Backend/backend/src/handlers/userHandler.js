import Users from '../model/user.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/token.js';
import Boom from '@hapi/boom';

export const create_user = async (request, h) => {
  var { username, password } = request.payload;

  password = await bcrypt.hash(password, 10);

  const newUser = {
    username,
    password,
  };

  if (!username || !password) {
    throw Boom.badRequest('Nama atau password tidak boleh kosong');
  }

  const user = await Users.create(newUser);

  return h
    .response({
      status: 'success',
      message: 'User berhasil dibuat',
      data: user,
    })
    .code(200);
};

export const get_user = async (request, h) => {
  const user = await Users.find();
  return h
    .response({
      status: 'success',
      data: user,
    })
    .code(200);
};

export const login_user = async (request, h) => {
  const { username, password } = request.payload;

  const user = {
    username,
    password,
  };

  var result = await Users.findOne({ username: username });

  if (!result || !(await result.matchPassword(user['password']))) {
    throw Boom.unauthorized('username atau password salah');
  }

  generateToken(h, result._id);
  return h
    .response({
      status: 'success',
      message: 'Login berhasil',
      data: result,
    })
    .code(200);
};

export const logout_user = async (request, h) => {
  await h.unstate('jwt');

  return h
    .response({
      status: 'success',
      message: 'Berhasil logout',
    })
    .code(200);
};
