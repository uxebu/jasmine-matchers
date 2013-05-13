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
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveProperties('x', 'y');
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
        expect({tagCount :{DefineButton: 2}})
          .not.toHavePropertiesWithValues({tagCount :{DefineButton: 1}});
      });
    });

  });

  describe('toHaveOwnProperties', function() {

    describe('matches', function() {
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x: 0, y: undefined};
        expect(obj).toHaveOwnProperties('x', 'y');
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

});
