// This file is only here, so the jasmine-node runner
// that uses requirejs loads all the matchers!
// Since all the matchers loading moved into the runner[-dist].html
// file, so we can load the matchers for dist and src version as needed.
require([global.__dirname + '/../src/matchers'], function() {

});
