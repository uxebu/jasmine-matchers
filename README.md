Under MIT License

# Overview

This project contains a set of matchers for the jasmine test library
that are very handy for more explicit test writing and especially
more explicit error reportings.
It contains matchers such as
- toBeArray
- toBeInstanceOf
- toThrowInstanceOf
- toHaveBeenCalledXTimes
and more.

# Usage

Either you use in your browser jasmine test runner by adding it after the script-tag `jasmine.js`:

~~~html
<script src="matchers.js"></script>
~~~

Or when using [jasmine-node](https://github.com/mhevery/jasmine-node) you can simply install the matchers via:

~~~bash
npm install jasmine-matchers
~~~

And make them available in your spec-file:

~~~js
require('jasmine-matchers');
describe(...);

// or via requirejs (assuming your specs are within PROJECT_ROOT/test):
require(['../node_modules/src/matchers.js'], function() {
  describe(...);
});
~~~

# Development setup

~~~ bash
# https://github.com/gruntjs/grunt/wiki/Getting-started
npm install -g grunt-cli
cd jasmine-matchers
npm install
# execute lint & test
grunt test # or npm test
# execute lint
grunt jshint
# execute tests in phantomjs
grunt test-phantom
# make a release
grunt release
# start a server
grunt server # visit http://localhost:8231/_spec_runner.html
~~~

# History

This used to be our (uxebu's) collection of matchers that moved from project
to project, got extended here and there, let's share it.

TODO
  - build one file, for easier inclusion
