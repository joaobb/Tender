const Joi = require("joi");

const authValidation = async (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().required().email().messages({
      "string.email": "The given email is not valid.",
      "string.empty": "Enter your email to continue.",
    }),
    password: Joi.string(),
  });

  return await loginSchema.validateAsync({ ...data });
};

module.exports.authValidation = authValidation;
