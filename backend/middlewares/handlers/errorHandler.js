const ErrorService = require("../services/errorService");

const handleError = async (req, res, error) => {
  console.log(error);
  res.locals["error"] = error;
  ErrorService.Serve(res);
};

module.exports = {
  handleError,
};
