const login = async ({ res }) => {
	try {
		const { account } = res.locals;

		res.status(200).json(account);
	} catch (error) {
		console.error(error);
		res.json({ message: error.message });
	}
};

module.exports = {
	login,
};
