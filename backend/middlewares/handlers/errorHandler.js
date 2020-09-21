const ErrorService = require('../services/errorService');

const handleError = async (req, res, error) => {
	res.locals['error'] = error;
	ErrorService.Serve(res);
};

module.exports = {
	handleError,
};
