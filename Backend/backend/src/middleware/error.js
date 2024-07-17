import Hapi from '@hapi/hapi';
import dotenv from 'dotenv';

dotenv.config();

const notFound = (request, h) => {
  const response = h
    .response({
      status: 'Fail',
      message: request.response.message,
    })
    .code(404);

  return response;
};

const errorHandler = (request, h) => {
  const response = request.response;

  if (!response.isBoom) {
    return h.continue;
  }

  const statusCode = response.output.statusCode;
  let message = response.message;

  if (response.name === 'CastError' && response.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found';
  }

  const status = statusCode === 500 ? 'Error' : 'Fail';

  const errorResponse = h
    .response({
      status: status,
      message: message,
      stack: process.env.NODE_ENV === 'production' ? null : response.stack,
    })
    .code(statusCode);

  return errorResponse;
};

export { notFound, errorHandler };
