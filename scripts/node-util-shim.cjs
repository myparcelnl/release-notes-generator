// Shim for Node.js v22+ where util.isDate was removed.
// Some transitive deps (eslint-plugin-ava -> deep-strict-equal -> core-assert) still call util.isDate.

const util = require('node:util');

const define = (name, fn) => {
  if (typeof util[name] !== 'function') {
    util[name] = fn;
  }
};

define('isDate', (value) => util.types?.isDate?.(value) ?? value instanceof Date);
define('isRegExp', (value) => util.types?.isRegExp?.(value) ?? value instanceof RegExp);
define('isError', (value) => util.types?.isNativeError?.(value) ?? value instanceof Error);
