define([
  'order!../lib/jasmine-core/jasmine.js',
  'order!../lib/jasmine-core/jasmine-html.js',
  'order!../lib/jasmine-core/jasmine.junit-reporter.js',
  'order!../src/matchers.js'
], function(jasmineCore, jasmineHtml, junitReporter, jasmineHelper) {
  'use strict';

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 10000;

  var trivialReporter = new jasmine.TrivialReporter;
  jasmineEnv.addReporter(trivialReporter);
  jasmineEnv.addReporter(new jasmine.JUnitXmlReporter('', true, false));

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
