beforeEach(function() {
  this.addMatchers({

   toThrowInstanceOf: function(klass) {
      try {
        this.actual();
      } catch (e) {
        return e instanceof klass;
      }
      return false;
    }

  });
});
