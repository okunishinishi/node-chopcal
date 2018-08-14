/**
 * Chop numbers.
 * @module chopcal
 */

'use strict'

const d = (module) => module && module.default || module

const ceil = d(require('./ceil'))
const floor = d(require('./floor'))
const round = d(require('./round'))
const surplus = d(require('./surplus'))

module.exports = {
  ceil,
  floor,
  round,
  surplus
}
