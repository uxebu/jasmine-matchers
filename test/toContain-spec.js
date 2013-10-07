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
      it('should also work for nested arrays', function() {
        expect([['one', 'a'], ['two', 'b']])
          .toContainEach([['one', 'a']]);
      });

      describe('for actual being a string', function() {
        it('simple one letter search', function() {
          expect('There is a and b in here')
            .toContainEach(['a', 'b']);
        });
        it('multi letter string', function() {
          expect('There is a and b in here')
            .toContainEach(['a and b']);
        });
        it('multi letter string 1', function() {
          expect('There is /a/path and {something: like an object} in here')
            .toContainEach(['/a/path', '{something: like an object}']);
        });
      });
    });
    describe('non-matches', function() {
      it('should NOT contain [c]', function() {
        expect(['a', 'b'])
          .not.toContainEach(['c']);
      });
      it('should also work when actual is a string', function() {
        expect('There is a and b in here')
          .not.toContainEach(['c']);
      });
    });
  });

  describe('toContainEachOnce', function() {

    describe('matches', function() {
      it('should work for simple strings', function() {
        expect('one two three')
          .toContainEachOnce(['one', 'two', 'three']);
      });
    });

    describe('non-matches', function() {
      it('should work for simple strings', function() {
        expect('one two three')
          .not.toContainEachOnce(['one', 'two', 'three', 'four']);
      });
      it('should bail if contained too often', function() {
        expect('one two two three')
          .not.toContainEachOnce(['one', 'two', 'three']);
      });
    });

  });

});
