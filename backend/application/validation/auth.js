const Joi = require('joi');

const authValidation = async (data) => {
	const loginSchema = Joi.object({
		email: Joi.string().required().email().messages({
			'string.email': 'O email inserido não é válido.',
			'string.empty': 'Insira seu email para entrar.',
		}),
		password: Joi.string(),
	});

	return await loginSchema.validateAsync({ ...data });
};

module.exports.authValidation = authValidation;
