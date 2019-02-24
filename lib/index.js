/**
 * Chop numbers.
 * @module chopcal
 */

'use strict'


const ceil = require('./ceil')
const floor = require('./floor')
const round = require('./round')
const surplus = require('./surplus')

exports.ceil = ceil
exports.floor = floor
exports.round = round
exports.surplus = surplus

module.exports = {
  ceil,
  floor,
  round,
  surplus
}
