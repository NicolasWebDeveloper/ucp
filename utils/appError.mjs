class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this._message = message;
    this.statusCode = statusCode;
    this.status = statusCode < 500 && statusCode >= 400 ? 'fail' : 'error';
    this.isOperational = true;
    this.stack = Error.captureStackTrace(this);
  }
}

export default AppError;
