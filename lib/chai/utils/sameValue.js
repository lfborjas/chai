/**
* ### sameValue (x, y)
*
* Checks if two values have the same observable value.
* Quoth [harmony:egal](http://wiki.ecmascript.org/doku.php?id=harmony:egal)
* > If two values are egal, then they are not observably distinguishable
* This deals with edge cases like NaN being egal to NaN or -0 not being egal to +0
*
*     sameValue(42, 42); // => true
*     sameValue(NaN, NaN); // => true
*     sameValue(-0, +0); // => false
*
* Code taken almost verbatim from <http://wiki.ecmascript.org/doku.php?id=harmony:egal>
*
* @param {Object} x the subject value (the tester)
* @param {Object} y the object value (the one being tested for _egality_)
* @returns {Boolean} if the objects are egal to one another
* @name sameValue
* @api public
*/

module.exports = function ( x, y ){
   if (x === y) {
    // 0 === -0, but they are not identical
    return x !== 0 || 1 / x === 1 / y;
  }

  // NaN !== NaN, but they are identical.
  // NaNs are the only non-reflexive value, i.e., if x !== x,
  // then x is a NaN.
  // isNaN is broken: it converts its argument to number, so
  // isNaN("foo") => true
  return x !== x && y !== y; 
};
