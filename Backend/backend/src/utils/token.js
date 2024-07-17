import 'dotenv/config';
import Jwt from 'jsonwebtoken';

const generateToken = (h, user_id) => {
  const token = Jwt.sign({ user_id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Mengatur cookie pada respons Hapi.js
  h.state('jwt', token, {
    path: '/',
    isHttpOnly: true,
    isSecure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    ttl: 30 * 24 * 60 * 60 * 1000, // 30 days
    clearInvalid: false,
    strictHeader: true,
  });
};

export default generateToken;
