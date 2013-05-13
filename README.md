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
// Since v0.2.0 you have to include every matcher on demand
<script src="jasmine-matchers/src/toBe.js"></script>
<script src="jasmine-matchers/src/toHave.js"></script>
<script src="jasmine-matchers/src/toContain.js"></script>
<script src="jasmine-matchers/src/toThrow.js"></script>
<script src="jasmine-matchers/src/toStartEndWith.js"></script>
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
require([
  '../node_modules/jasmine-matchers/src/toBe.js',
  '../node_modules/jasmine-matchers/src/toHave.js',
  '../node_modules/jasmine-matchers/src/toContain.js',
  '../node_modules/jasmine-matchers/src/toThrow.js',
  '../node_modules/jasmine-matchers/src/toStartEndWith.js',
], function() {
  describe(...);
});
~~~

# History

This used to be our (uxebu's) collection of matchers that moved from project
to project, got extended here and there, let's share it.

# Build

Use `make build` to create one file, that lands in `dist/matchers.js`
that you can include, if you don't like to handle multiple files.

# TODO
- integrate with travis
