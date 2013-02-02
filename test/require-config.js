if (typeof process !== 'undefined' && typeof process.nextTick !== 'undefined') {
  var requirejs = require('requirejs');
  requirejs.config({
    baseUrl: __dirname
  });
  require = requirejs;
}

require.config({
  paths: {
    src: '../src'
  }
});
