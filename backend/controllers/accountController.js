const createAccount = async ({ res }) => {
	try {
		const { account } = res.locals;

		res.status(200).json({
			_id: account._id,
			email: account.email,
			username: account.username,
		});
	} catch (error) {
		console.error(error.message);
		res.json({ message: error.message });
	}
};

const getAccount = async ({ res }) => {
	try {
		const { account } = res.locals;

		res.json({
			_id: account._id,
			email: account.email,
			username: account.username,
			recipes: account.recipes,
		});
	} catch (error) {
		console.error(error);
		res.json({ message: error.message });
	}
};

module.exports = {
	createAccount,
	getAccount,
};
