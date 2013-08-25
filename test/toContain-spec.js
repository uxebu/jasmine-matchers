require([], function() {

  describe('toContainOnce', function() {

    describe('matches', function() {

      it('should work for arrays', function() {
        expect([1,2]).toContainOnce(1);
      });
      it('should work for strings', function() {
        expect('uxebu rox').toContainOnce('uxebu');
      });

    });

    describe('non-matches', function() {

      it('should work for arrays', function() {
        expect([1,2]).not.toContainOnce(3);
      });
      it('should work for strings', function() {
        expect('uxebu rox').not.toContainOnce('u');
      });
      it('should work for undefined', function() {
        expect(undefined).not.toContainOnce(1);
      });

    });

  });

  describe('toContainEach', function() {
    describe('matches', function() {
      it('should contain [a]', function() {
        expect(['a', 'b'])
          .toContainEach(['a']);
      });
      it('should contain [a,b] any order', function() {
        expect(['a', 'b'])
          .toContainEach(['b', 'a']);
      });
    });
    describe('non-matches', function() {
      it('should NOT contain [c]', function() {
        expect(['a', 'b'])
          .not.toContainEach(['c']);
      });
    });
  });

});
