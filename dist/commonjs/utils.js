'use strict';

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
var extend = function extend(destination, source) {
  for (var property in source) destination[property] = source[property];
  return destination;
};

exports.extend = extend;
var assignObjectToKeys = function assignObjectToKeys(root, obj) {
  if (obj === undefined || obj === null) return obj;

  var opts = {};

  _Object$keys(obj).map(function (key) {
    if (typeof obj[key] === 'object') {
      extend(opts, assignObjectToKeys(key, obj[key]));
    } else {
      opts[root !== '' ? root + '.' + key : key] = obj[key];
    }
  });

  return opts;
};
exports.assignObjectToKeys = assignObjectToKeys;