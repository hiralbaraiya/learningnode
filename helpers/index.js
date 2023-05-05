const errorResponse = (
  req,
  res,
  errorMessage = "Something went wrong",
  code = 500,
  error = {}
) =>
  res.status(500).json({
    code,
    errorMessage,
    error,
    data: null,
    success: false,
  });

const successResponse = (req, res, data = {}, code = 200) =>
  res.status(200).json({
    code,
    data,
    success: true,
  });

module.exports = {
  errorResponse,
  successResponse,
};
