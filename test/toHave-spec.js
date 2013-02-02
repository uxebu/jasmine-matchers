define(function() {

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
