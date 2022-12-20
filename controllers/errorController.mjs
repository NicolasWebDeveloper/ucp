import AppError from '../utils/appError.mjs';

const bodyError = () => new AppError('Invalid request body provided!');

const handleProductionError = (err, res) => {
  res.status(err.statusCode).json({ statusCode: err.statusCode, status: err.status, message: err._message });
};

export default (err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev') {
    //App is started in DEV-Mode
    console.log(err);
  } else {
    console.log(err);
    let error = { ...err };
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    error.message = error.message || 'Internal server error';
    if (error.type === 'entity.parse.failed') error = bodyError();
    handleProductionError(err, res);
    //App is started not in dev mode
  }
};
