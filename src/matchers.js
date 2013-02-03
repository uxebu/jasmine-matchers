var matcherFiles = [
  'toBe.js',
  'toContain.js',
  'toHave.js',
  'toStartEndWith.js',
  'toThrow.js'
];

var i, l;

if (typeof process !== 'undefined' && typeof process.nextTick !== 'undefined') {
  // node.js
  for(i=0, l=matcherFiles.length; i<l; i++) {
    require('./' + matcherFiles[i]);
  }
} else {
  // fallback
  console.warn('[jasmine-matchers] Since v0.2.0 please import each matcher-file separately: ' + matcherFiles.join(', '));
}
