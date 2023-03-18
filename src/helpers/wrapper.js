function tryCatchWrapper(enpointFn) {
  return async (req, res, next) => {
    try {
      await enpointFn(req, res, next);
    } catch (error) {
      console.log("ndefononb");
      return next(error);
    }
  };
}

module.exports = {
  tryCatchWrapper,
};
