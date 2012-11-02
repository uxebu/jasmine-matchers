define(function() {
  'use strict';

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 10000;

  var trivialReporter = new jasmine.TrivialReporter;
  jasmineEnv.addReporter(trivialReporter);

  jasmineEnv.specFilter = function(spec) {
    return trivialReporter.specFilter(spec);
  };
  var execJasmine = function() { jasmineEnv.execute(); };
  if (document.body) {
    setTimeout(execJasmine, 1000);
  } else {
    addEventListener('load', execJasmine, false);
  }
//*/
});
