import Hapi from '@hapi/hapi';
import { produkRoutes } from './routes/produkRoutes.js';
import hapiMongo from 'hapi-mongodb';
import mongoose from 'mongoose';
import { notFound, errorHandler } from './middleware/error.js';
import { userRoutes } from './routes/userRoutes.js';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  try {
    await mongoose.connect(
      'mongodb://defanykhoirunnisa:Fanfany123@ac-3bvr2k7-shard-00-00.myzok8s.mongodb.net:27017,ac-3bvr2k7-shard-00-01.myzok8s.mongodb.net:27017,ac-3bvr2k7-shard-00-02.myzok8s.mongodb.net:27017/?ssl=true&replicaSet=atlas-tk1i2t-shard-0&authSource=admin&retryWrites=true&w=majority&appName=capstone',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }

  server.route(produkRoutes);
  server.route(userRoutes);

  // Middleware notFound untuk menangani rute yang tidak ditemukan
  server.ext('onPreResponse', (request, h) => {
    if (request.response.isBoom && request.response.output.statusCode === 404) {
      return notFound(request, h);
    }

    return h.continue;
  });

  // Middleware errorHandler untuk menangani error lainnya
  server.ext('onPreResponse', (request, h) => {
    return errorHandler(request, h);
  });

  try {
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (e) {
    console.error('Failed to start server', e);
  }
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
