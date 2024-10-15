// Wraps an async function and catches any errors, passing them to next middleware.
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
