const { ReqError } = require('../../helpers/ReqError');

const Serve = async (res) => {
	try {
		const { error } = res.locals;

		if (error instanceof ReqError) res.status(error.statusCode);
		else res.status(500);

		res.json({ message: error.message });
	} catch (error) {
		console.error(error);
		res.json({ message: 'A strange error occured on our end, we are already trying to fix it.' });
	}
};

module.exports = {
	Serve,
};
