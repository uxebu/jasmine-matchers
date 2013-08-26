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
      var didNotContain = [];
      if (typeof actual == 'string') {
        didNotContain = getNotContainedInString(actual, shouldContain)
      } else {
        didNotContain = getNotContainedInArray(actual, shouldContain)
      }

      var not = this.isNot ? " NOT" : "";
      this.message = function() {
        return 'Expected ' + JSON.stringify(actual) + not + ' to contain `' + didNotContain + '` .';
      };
      return !didNotContain.length;
    }

  });

  function getNotContainedInString(str, searches) {
    var didNotContain = [];
    for (var i=0, l=searches.length; i<l; i++) {
      if (str.indexOf(searches[i]) == -1) {
        didNotContain.push(searches[i]);
      }
    }
    return didNotContain;
  }

  function getNotContainedInArray(arr, searches) {
    var actualJsoned = [];
    for (var i= 0, l=arr.length; i<l; i++) {
      actualJsoned.push(JSON.stringify(arr[i]));
    }
    var didNotContain = [];
    for (var i=0, l=searches.length; i<l; i++) {
      if (actualJsoned.indexOf(JSON.stringify(searches[i])) == -1) {
        didNotContain.push(searches[i]);
      }
    }
    return didNotContain;
  }

});
