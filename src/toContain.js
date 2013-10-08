beforeEach(function() {
  this.addMatchers({

    toContainOnce: function(value) {
      return containsOnce(value, this.actual);
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
    },

    toContainEachOnce: function(shouldContainOnce) {
      var actual = this.actual;
      var didNotContain = [];
      if (typeof actual == 'string') {
        didNotContain = getNotContainedInString(actual, shouldContainOnce)
      } else {
        didNotContain = getNotContainedInArray(actual, shouldContainOnce)
      }

      var numValues = shouldContainOnce.length;
      var containedMoreThanOnce = [];
      for (var i = 0; i < numValues; i++) {
        var value = shouldContainOnce[i];
        if (!containsOnce(value, actual) && didNotContain.indexOf(value) == -1) {
          containedMoreThanOnce.push(value);
        }
      }

      var not = this.isNot ? " NOT" : "";
      this.message = function() {
        return 'Expected ' + JSON.stringify(actual) + not + ' to contain once `' + didNotContain.concat(containedMoreThanOnce).join(', ') + '` .';
      };
      return !didNotContain.length && containedMoreThanOnce.length==0;
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

  function containsOnce(str, arr) {
    if (!arr) {
      return false;
    }
    var firstFoundAt = arr.indexOf(str);
    return firstFoundAt!=-1 && firstFoundAt == arr.lastIndexOf(str);
  }

});
