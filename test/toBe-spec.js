require([], function() {

  describe('toBeArray', function() {

    describe('matches', function() {
      it('should pass for []', function() {
        expect([]).toBeArray();
      });
      it('should pass for `new Array`', function() {
        expect(new Array).toBeArray();
      });
      it('should pass for [1,"",{}]', function() {
        expect([1,"",{}]).toBeArray();
      });
    });

    describe('.not matches', function() {

      it('should pass for {}', function() {
        expect({}).not.toBeArray();
      });
      it('should pass for `arguments`', function() {
        expect(arguments).not.toBeArray();
      });

    });

  });

  describe('toBeNumber', function() {

    describe('matches', function() {
      it('should pass for 0', function() {
        expect(0).toBeNumber();
      });
      it('should pass for 2.1', function() {
        expect(2.1).toBeNumber();
      });
    });
    describe('non matches', function() {
      it('should pass for "x"', function() {
        expect('x').not.toBeNumber();
      });
      it('should pass for function(){}', function() {
        expect(function() {}).not.toBeNumber();
      });
    });

  });

  describe('toBeInstanceOf', function() {

    describe('matches', function() {

      it('should work for `function(){}` to be instance of `Function`', function() {
        expect(function(){}).toBeInstanceOf(Function);
      });

    });

  });

  describe('toBeNan', function() {

    describe('matches', function() {
      it('should work for NaN', function() {
        expect(NaN).toBeNan();
      });
    });

  });

  describe('toBeOfType', function() {

    describe('matches', function() {
      it('should work for `number`', function() {
        expect(1).toBeOfType('number');
      });
    });

    describe('non-matches', function() {
      it('should work for `number`', function() {
        expect('a').not.toBeOfType('number');
      });
    });

  });

  describe('toBeInRange', function() {

    describe('matches', function() {

      it('should find 0 in 0..1', function() {
        expect(0).toBeInRange(0, 1);
      });
      it('should find 1 in 0..2', function() {
        expect(1).toBeInRange(0, 2);
      });
      it('should find 1.5 in 1..2', function() {
        expect(1.5).toBeInRange(1, 2);
      });

    });

    describe('non-matches', function() {

      it('should not find 0 in 1..2', function() {
        expect(0).not.toBeInRange(1, 2);
      });
      it('should not find 100 in 33..55', function() {
        expect(100).not.toBeInRange(33, 55);
      });

    });

  });

  describe('toBeOneOf', function() {

    describe('matches', function() {

      it('should find "a" in ["a", "b"]', function() {
        expect('a').toBeOneOf(['a', 'b']);
      });
      it('should find "uxebu" in ["company", "uxebu"]', function() {
        expect('uxebu').toBeOneOf(['company', 'uxebu']);
      });

    });

    describe('non-matches', function() {

      it('should not find "" in [" ", "0"]', function() {
        expect('').not.toBeOneOf([' ', '0']);
      });
      it('should not find "a" in ["b", "c"]', function() {
        expect('a').not.toBeOneOf(['b', 'c']);
      });

    });

  });

  describe('toBeCloseToOneOf', function() {

    function oneDigitOff(actual, expected) {
      var actualInt = parseInt(actual, 10);
      return actualInt-1 <= expected && actualInt+1 >= expected;
    }

    function tenPercentOff(actual, expected) {
      return expected * 0.9 <= actual && expected * 1.1 >= actual;
    }

    function oneDigitOrTenPercentOff(actual, expected) {
      return oneDigitOff(actual, expected) || tenPercentOff(actual, expected);
    }

    function twoDecimalsOff(actual, expected) {
      var lower = ((expected * 100) - 2 ) / 100;
      var upper = ((expected * 100) + 2 ) / 100;
      return lower <= actual && upper >= actual;
    }

    describe('matches', function() {

      it('should say 7 is close to one of [8, 9]', function() {
        expect(7).toBeCloseToOneOf([8, 9], oneDigitOff);
      });
      it('should say 2 is 10% off of one of [2.2, 1.0]', function() {
        expect(2).toBeCloseToOneOf([2.2, 1.0], tenPercentOff);
      });
      it('should say 7 is close to one of [8, 9]', function() {
        expect(7).toBeCloseToOneOf([8, 9], oneDigitOrTenPercentOff);
      });
      it('should say 1.345 two decimals off of [1.325, 1.365]', function() {
        expect(1.345).toBeCloseToOneOf([1.325, 1.365], twoDecimalsOff);
      });

    });

    describe('non-matches', function() {

      it('should say 7 is NOT one off of [9, 10, 11]', function() {
        expect(7).not.toBeCloseToOneOf([9, 10, 11], oneDigitOff);
      });
      it('should say 1 is close to one of [8, 9]', function() {
        expect(1).not.toBeCloseToOneOf([8, 9], oneDigitOrTenPercentOff);
      });
      it('should say 1.9 is NOT 10% off of one of [2.2, 1.0]', function() {
        expect(1.9).not.toBeCloseToOneOf([2.2, 1.0], tenPercentOff);
      });
      it('should say 1.345 two decimals off of [1.325, 1.365]', function() {
        expect(1.304).not.toBeCloseToOneOf([1.325, 1.365], twoDecimalsOff);
      });

    });

  });

  describe('toBeEmpty', function(){
    describe('matches', function(){
      it('should pass for ""', function(){
        expect("").toBeEmpty();
      });
      it('should pass for []', function(){
        expect([]).toBeEmpty();
      });
    });
    describe('non-matches', function(){
      it('should say NOT empty for "abc"', function(){
        expect('abc').not.toBeEmpty();
      });
      it('should say NOT empty for [1,2,3]', function(){
        expect([1,2,3]).not.toBeEmpty();
      });
    });
  });

});
