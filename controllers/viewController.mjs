import catchAsync from '../utils/catchAsync.mjs';

export const renderLogin = catchAsync(async (req, res) => {
  res.render('login');
});

export const renderDashboard = catchAsync(async (req, res) => {
  res.render('dashboard');
});
