const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign(
    {
      user: {
        email: user.email,
      },
    },
    process.env.SECRET,
    {
        expiresIn:"1d"
    }
  );
};

module.exports = {
  createToken,
};
