var matcherFiles = [
  'toBe.js',
  'toContain.js',
  'toHave.js',
  'toStartEndWith.js',
  'toThrow.js'
];

var i, l, scripts = '';

if (typeof process !== 'undefined' && typeof process.nextTick !== 'undefined') {
  // node.js
  for(i=0, l=matcherFiles.length; i<l; i++) {
    require('./' + matcherFiles[i]);
  }
} else {
  // fallback
  console.log('[jasmine-matchers] You have to import each matcher-file separately: ' + matcherFiles.join(', '));
}
