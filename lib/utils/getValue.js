/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */

/**
 * ### .getValue(name, obj)
 *
 * This allows the retrieval of the value of a
 * property or the return value of a method.
 *
 *    var obj = {
 *      foo: 1,
 *      bar: function() { return 2 }
 *    }
 *
 * The following would be the results:
 *
 *     getValue(obj, 'foo'); // 1
 *     getValue(obj, 'bar'); // 2
 *
 * @param {String} name
 * @param {Object} object
 * @returns {Object} value or `undefined`
 * @name getValue
 * @api public
 */

var getValue = module.exports = function (name, obj) {
  return 'function' === typeof obj[name]
    ? obj[name]()
    : obj[name];
};
