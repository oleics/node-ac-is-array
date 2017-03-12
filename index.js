
var _isArray;

if(Array.isArray === 'function') {
  _isArray = function(value) {
    return Array.isArray(value);
  };
} else {
  _isArray = (function(){
    var _toStr = Object.prototype.toString;
    return function(value) {
      return _toStr.call(value) === '[object Array]';
    };
  })();
}

module.exports = isArray;

function isArray(value) {
  return _isArray(value);
}
