beforeEach(function() {
  this.addMatchers({

    toContainOnce: function(value) {
      var actual = this.actual;
      var containsOnce = false;
      if (actual) {
        var firstFoundAt = actual.indexOf(value);
        containsOnce = firstFoundAt!=-1 && firstFoundAt == actual.lastIndexOf(value);
      }
      return containsOnce;
    },

    toContainEach: function(shouldContain) {
      var actual = this.actual;
      var actualJsoned = [];
      for (var i= 0, l=actual.length; i<l; i++) {
        actualJsoned.push(JSON.stringify(actual[i]));
      }
      var didNotContain = [];
      for (var i=0, l=shouldContain.length; i<l; i++) {
        if (actualJsoned.indexOf(JSON.stringify(shouldContain[i])) == -1) {
          didNotContain.push(shouldContain[i]);
        }
      }

      var not = this.isNot ? " NOT" : "";
      this.message = function() {
        return 'Expected ' + JSON.stringify(actual) + not + ' to contain `' + didNotContain + '` .';
      };
      return !didNotContain.length;
    }

  });
});
