require([
  './runner.js'
], function() {

  describe('matchers', function() {
    var matchers;

    beforeEach(function() {
      matchers = this.matchersClass.prototype;
    });

    it('should be   ', function() {
      matchers.actual = null;
      var actual = matchers.toBeArray.apply(null, []);
      expect(actual).toBe(true);
    });

  });
});
