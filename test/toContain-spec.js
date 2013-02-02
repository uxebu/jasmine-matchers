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

});
