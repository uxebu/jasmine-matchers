require([
  './runner.js'
], function() {

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

  });

  describe('toHaveLength', function() {

    describe('matches', function() {
      it('should work for `{length:null}`', function() {
        expect({length:null}).toHaveLength(null);
      });
    });

  });

  describe('toHaveProperties', function() {

    describe('matches', function() {
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x:0, y:undefined};
        expect(obj).toHaveProperties('x', 'y');
      });
    });

  });

  describe('toHaveOwnProperties', function() {

    describe('matches', function() {
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x:0, y:undefined};
        expect(obj).toHaveOwnProperties('x', 'y');
      });
    });

  });

  describe('toThrowInstanceOf', function() {

    describe('matches', function() {
      it('should work for `Error`', function() {
        expect(function(){ throw new Error; })
          .toThrowInstanceOf(Error);
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

});
