const debug = require('debug')('wxexchange')
const {ERRORS} = require('../constant')

module.exports = async function (ctx, next) {
  const {
    'x-wx-code': code
  } = ctx.req.headers

  if ([code].every(v => !v)) {
    debug(ERRORS.ERR_AUTH_HEADER_MISSED)
    throw new Error(ERRORS.ERR_AUTH_HEADER_MISSED)
  }

  debug('Auth: code: %s', code)

  await next();
}