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

});
