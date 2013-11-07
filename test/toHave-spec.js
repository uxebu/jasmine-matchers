require([], function() {

  describe('toHaveLength', function() {

    describe('matches', function() {
      it('should work for `{length:null}`', function() {
        expect({length: null}).toHaveLength(null);
      });
    });

  });

  describe('toHaveProperties', function() {

    describe('matches', function() {
      it('should work with one property', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveProperties('x');
      });
      it('should work with one property as array', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveProperties(['x']);
      });
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveProperties('x', 'y');
      });
      it('should work with an array too', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveProperties(['x', 'y']);
      });
    });
  });

  describe('toHavePropertiesWithValues', function() {

    describe('matches', function() {
      it('should work with a reference object', function() {
        function C() { this.x = 0; }

        C.prototype.y = 'arbitrary';

        expect(new C).toHavePropertiesWithValues({
          x: 0,
          y: 'arbitrary',
          constructor: C
        });
      });
      it('should work with nested objects', function() {
        expect({obj: {x: 1, y: 2}})
          .toHavePropertiesWithValues({obj: {x: 1, y: 2}});
      });
      it('should work with nested objects, also when the keys are not in the same order', function() {
        expect({obj: {x: 1, y: 2}})
          .toHavePropertiesWithValues({obj: {y: 2, x: 1}});
      });
      it('should work with nested objects of depth>2, and different key order', function() {
        expect({obj: {x: 1, y: 2, subObj: {subsub: {a: 9, b: 10}}}})
          .toHavePropertiesWithValues({obj: {x: 1, subObj: {subsub: {b: 10, a: 9}}, y: 2}});
      });
    });

    describe('non-matches', function() {
      it('should not fail with undefined', function() {
        expect(undefined)
          .not.toHavePropertiesWithValues({obj: {x: 1, y: 2}});
      });
      it('should work in nested objects', function() {
        expect({tagCount: {DefineButton: 2}})
          .not.toHavePropertiesWithValues({tagCount: {DefineButton: 1}});
      });
      it('should work when all actual values` values are 0', function() {
        expect({audio: 0, video: 0, image: 0, font: 0})
          .not.toHavePropertiesWithValues({audio: 1, video: 0, image: 3, font: 1});
      });
    });

  });

  describe('toHaveOwnProperties', function() {

    describe('matches', function() {
      it('should work with one property', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveOwnProperties('x');
      });
      it('should work with one property as array', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveOwnProperties(['x']);
      });
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveOwnProperties('x', 'y');
      });
      it('should work with an array', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveOwnProperties(['x', 'y']);
      });
    });
  });

  describe('toHaveOwnPropertiesWithValues', function() {

    describe('matches', function() {
      it('should work with a reference object', function() {
        expect({
          x: 0,
          y: 'arbitrary'
        }).toHaveOwnPropertiesWithValues({
            x: 0,
            y: 'arbitrary'
          });
      });
    });

  });

  describe('toHaveBeenCalledXTimes', function() {

    describe('matches', function() {
      it('should work for 1', function() {
        var func = jasmine.createSpy('func');
        func();
        expect(func).toHaveBeenCalledXTimes(1);
      });

      it('should work for 2', function() {
        var func = jasmine.createSpy('func');
        func();
        func();
        expect(func).not.toHaveBeenCalledXTimes(1);
      });
    });

  });

  describe('toExactlyHaveProperties', function() {

    describe('matches', function() {
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x: 0, y: undefined};
        expect(obj)
          .toExactlyHaveProperties('x', 'y');
      });
      it('should work in any order', function() {
        var obj = {x: 0, y: undefined};
        expect(obj)
          .toExactlyHaveProperties('y', 'x');
      });
    });

    describe('non-matches', function() {
      it('should work for too many properties', function() {
        var obj = {x: 0, y: undefined};
        expect(obj)
          .not.toExactlyHaveProperties('x');
      });
      it('should work for missing properties', function() {
        var obj = {x: 0, y: undefined};
        expect(obj)
          .not.toExactlyHaveProperties('x', 'y', 'z');
      });
    });

  });

  describe('toHaveEnumerableProperties', function() {
    describe('matches', function() {

      it('should find `x` on obj', function() {
        var obj = {x: 1};
        expect(obj)
          .toHaveEnumerableProperties(['x']);
      });

      it('should find `x` and `y` on obj', function() {
        var obj = {x: 1, y: 2};
        expect(obj)
          .toHaveEnumerableProperties(['x', 'y']);
      });

    });

    describe('non-matches', function() {

      it('should NOT find `y` on obj', function() {
        var obj = {x: 1};
        expect(obj)
          .not.toHaveEnumerableProperties(['y']);
      });

      it('should NOT find `x` and `y` on obj', function() {
        var obj = {z: 2};
        expect(obj)
          .not.toHaveEnumerableProperties(['x', 'y']);
      });

      it('should find one but NOT the other', function() {
        var obj = {z: 2};
        expect(obj)
          .not.toHaveEnumerableProperties(['x', 'z']);
      });

    });
  });

});
