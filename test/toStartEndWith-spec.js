require([], function() {

  describe('toEndWith', function() {

    describe('matches', function() {
      it('should work for string', function() {
        expect('abc').toEndWith('c');
      });
      it('should work for equal string', function() {
        expect('abc').toEndWith('abc');
      });
    });

    describe('non-matches', function() {
      it('should work for string', function() {
        expect('abc').not.toEndWith('d');
      });
      it('should work for equal string', function() {
        expect('abc').not.toEndWith('abz');
      });
    });

    describe('with array', function() {
      describe('matches', function() {
        it('should work for string', function() {
          expect(['1', '2'])
            .toEndWith('2');
        });
        it('should work for array', function() {
          expect([3, 4, 5])
            .toEndWith([4, 5]);
        });
      });
      describe('non-matches', function() {
        it('should work for string', function() {
          expect(['1', '2'])
            .not.toEndWith('3');
        });
        it('should work for array', function() {
          expect([3, 4, 5])
            .not.toEndWith([3, 4]);
        });
      });
    });

  });

  describe('toEachEndWith', function() {

    describe('matches', function() {

      it('should work for array with one element', function() {
        expect(['one']).toEachEndWith('e');
      });
      it('should work for array with multiple elements', function() {
        expect(['one', 'zwee', 'three']).toEachEndWith('e');
      });

    });

    describe('non-matches', function() {

      it('should work for array with one element', function() {
        expect(['one']).not.toEachEndWith('o');
      });
      it('should work for array with multiple elements', function() {
        expect(['one', 'zwei', 'three']).not.toEachEndWith('e');
      });

    });

  });

  describe('toSomeEndWith', function() {

    describe('matches', function() {

      it('should work for array with one element', function() {
        expect(['one']).toSomeEndWith('e');
      });
      it('should work for array with multiple elements', function() {
        expect(['one', 'zwee', 'three']).toSomeEndWith('ee');
      });

    });

    describe('non-matches', function() {

      it('should work for array with one element', function() {
        expect(['one']).not.toSomeEndWith('o');
      });
      it('should work for array with multiple elements', function() {
        expect(['one', 'zwei', 'three']).not.toSomeEndWith('a');
      });

    });

  });

  describe('toStartWith', function() {

    describe('matches', function() {
      it('should work for string', function() {
        expect('abc').toStartWith('a');
      });
      it('should work for equal string', function() {
        expect('abc').toStartWith('abc');
      });
    });

    describe('non-matches', function() {
      it('should work for string', function() {
        expect('abc').not.toStartWith('d');
      });
      it('should work for equal string', function() {
        expect('abc').not.toStartWith('abz');
      });
    });

    describe('with array', function() {
      describe('matches', function() {
        it('should work for string', function() {
          expect(['1', '2'])
            .toStartWith('1');
        });
        it('should work for array', function() {
          expect([3, 4, 5])
            .toStartWith([3, 4]);
        });
      });
      describe('non-matches', function() {
        it('should work for string', function() {
          expect(['1', '2'])
            .not.toStartWith('3');
        });
        it('should work for array', function() {
          expect([3, 4, 5])
            .not.toStartWith([4, 5]);
        });
      });
    });

  });

  describe('toEachStartWith', function() {

    describe('matches', function() {

      it('should work for array with one element', function() {
        expect(['one']).toEachStartWith('o');
      });
      it('should work for array with multiple elements', function() {
        expect(['one', 'onetwo', 'onethree']).toEachStartWith('o');
      });

    });

    describe('non-matches', function() {

      it('should work for array with one element', function() {
        expect(['one']).not.toEachStartWith('e');
      });
      it('should work for array with multiple elements', function() {
        expect(['one', 'two', 'onethree']).not.toEachStartWith('o');
      });

    });

  });

  describe('toSomeStartWith', function() {

    describe('matches', function() {

      it('should work for array with one element', function() {
        expect(['one']).toSomeStartWith('o');
      });
      it('should work for array with multiple elements', function() {
        expect(['one', 'onetwo', 'three']).toSomeStartWith('one');
      });

    });

    describe('non-matches', function() {

      it('should work for array with one element', function() {
        expect(['one']).not.toSomeStartWith('e');
      });
      it('should work for array with multiple elements', function() {
        expect(['one', 'two', 'onethree']).not.toSomeStartWith('a');
      });

    });

  });

  describe('toStartWithEither', function() {

    describe('matches', function() {

      it('should work for two parameters', function() {
        expect('one').toStartWithEither('two', 'one');
      });
      it('should work for three parameters', function() {
        expect('one').toStartWithEither('two', 'one', 'three');
      });
      it('should work for multiple matches', function() {
        expect('one').toStartWithEither('on', 'one', 'o');
      });

    });

    describe('non-matches', function() {

      it('should work for two elements', function() {
        expect('one').not.toStartWithEither('e', 'a');
      });
      it('should work for three elements', function() {
        expect('one').not.toStartWithEither('ne', 'ones', 'two');
      });

    });

    describe('with array', function() {
      describe('matches', function() {
        it('should work for string', function() {
          expect(['1', '2'])
            .toStartWithEither('1', '2');
        });
        it('should work for array', function() {
          expect([3, 4, 5])
            .toStartWithEither([4], [3, 4]);
        });
      });
      describe('non-matches', function() {
        it('should work for string', function() {
          expect(['1', '2'])
            .not.toStartWithEither('3');
        });
        it('should work for array', function() {
          expect([3, 4, 5])
            .not.toStartWithEither([5, 6], [4, 5]);
        });
      });
    });

  });

});
