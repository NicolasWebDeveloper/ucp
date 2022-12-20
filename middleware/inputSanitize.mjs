export default (req, res, next) => {
  const onlyLettersPattern = /^[A-Za-z-0-9]+$/;

  if (
    !Object.values(req.body)
      .join('')
      .match(onlyLettersPattern)
  ) {
    return res.status(400).json({ status: 'fail', message: 'No :)' });
  }
  next();
};
