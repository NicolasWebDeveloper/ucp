export default (req, res, next) => {
  const onlyLettersPattern = /^[A-Za-z-0-9]+$/;

  const body = Object.values(req.body).join('');

  if (!body.match(onlyLettersPattern)) {
    if (body.length > 0) return res.status(400).json({ status: 'fail', message: 'No :)' });
  }
  next();
};
