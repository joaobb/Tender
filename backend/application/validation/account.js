const Joi = require('joi');

const registerValidation = async (data) => {
	const registerSchema = Joi.object({
		username: Joi.string().min(6).max(32).required().messages({
			'string.min': 'Your username must have at least 6 characters.',
			'string.max': 'Your username must have a maximum of 32 characters.',
			'string.empty': 'A username is required to register an account.',
		}),
		email: Joi.string().required().email().messages({
			'string.email': 'The inserted email is not a valid one.',
			'string.empty': 'An email is required to register an account.',
		}),
		password: Joi.string().min(6).required().messages({
			'string.min': 'Your password must have at least 6 characters.',
			'string.empty': 'An password is required to register an account.',
		}),
	});

	return await registerSchema.validateAsync({ ...data });
};

module.exports.registerValidation = registerValidation;
