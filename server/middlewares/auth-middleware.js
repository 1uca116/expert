const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError('Unauthorized error'));
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError('Unauthorized error'));
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!accessToken) {
      return next(ApiError.UnauthorizedError('Unauthorized error'));
    }
    if (!userData) {
      return next(ApiError.UnauthorizedError('Unauthorized error'));
    }

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError('Unauthorized error'));
  }
};
