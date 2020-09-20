const createAccount = async ({ res }) => {
	try {
		const { account } = res.locals;

		res.status(200).json({
			_id: account._id,
			email: account.email,
			username: account.username,
		});
	} catch (error) {
		console.log("ERROR")
		res.json({ message: error });
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
		console.log('ERROR');
		res.json({ message: error });
	}
};

module.exports = {
	createAccount,
	getAccount,
};
