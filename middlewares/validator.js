const Joi = require("joi");
const Validators = require("../validators");

module.exports = function (validator) {
  if (!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);

  return async function (req, res, next) {
    return Validators[validator]
      .validateAsync(req.body)
      .then(() => {
        next();
      })
      .catch((err) => {
        return res.status(400).json({
          error: err.message,
          success: false,
        });
      });
  };
};
