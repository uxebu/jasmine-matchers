define(function() {

  describe('toThrowInstanceOf', function() {

    describe('matches', function() {
      it('should work for `Error`', function() {
        expect(function(){ throw new Error; })
          .toThrowInstanceOf(Error);
      });
    });

  });


});
