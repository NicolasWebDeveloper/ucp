import jwt from 'jsonwebtoken';
import AppError from '../utils/appError.mjs';
import catchAsync from '../utils/catchAsync.mjs';

export const loginUser = catchAsync(async (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) return next(new AppError('Invalid request body provided!', 400));
  res.status(200).json({ test: 'test' });
});

export const logoutUser = (req, res) => {};
