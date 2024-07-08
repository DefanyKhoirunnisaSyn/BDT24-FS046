import Hapi from '@hapi/hapi'
import { produkRoutes } from './routes.js';

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(produkRoutes);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();


