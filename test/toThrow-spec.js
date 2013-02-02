require([], function() {

  describe('toThrowInstanceOf', function() {

    describe('matches', function() {
      it('should work for `Error`', function() {
        expect(function(){ throw new Error; })
          .toThrowInstanceOf(Error);
      });
    });

  });

  describe('toThrowStartsWith', function() {

    describe('matches', function() {
      it('should match the error string', function() {
        expect(function(){ throw new Error('ooops'); })
          .toThrowStartsWith('ooops');
      });
    });

    describe('non-matches', function() {
      it('should mismatch the error string', function() {
        expect(function(){ throw new Error('ooops'); })
          .not.toThrowStartsWith('1');
      });
    });

  });

});
