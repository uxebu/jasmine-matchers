beforeEach(function() {
  this.addMatchers({

    //
    // start/endWith
    //

    toEndWith: function(value) {
      return endsWith(this.actual, value);
    },

    toEachEndWith: function(searchString) {
      var arrayOfStrings = this.actual;
      return arrayOfStrings.every(function(oneValue) {
        return endsWith(oneValue, searchString)
      });
    },

    toStartWithEither: function() {
      var args = [].slice.call(arguments);
      for (var i=0, l=args.length; i<l; i++) {
        if (startsWith(this.actual, args[i])) {
          return true;
        }
      }
      return false;
    },

    toSomeEndWith: function(searchString) {
      var arrayOfStrings = this.actual;
      return arrayOfStrings.some(function(oneValue) {
        return endsWith(oneValue, searchString)
      });
    },

    toStartWith: function(value) {
      return startsWith(this.actual, value);
    },

    toEachStartWith: function(searchString) {
      var arrayOfStrings = this.actual;
      return arrayOfStrings.every(function(oneValue) {
        return startsWith(oneValue, searchString)
      });
    },

    toSomeStartWith: function(searchString) {
      var arrayOfStrings = this.actual;
      return arrayOfStrings.some(function(oneValue) {
        return startsWith(oneValue, searchString)
      });
    }

  });
});

function isArray(value) {
  return toString.call(value) == '[object Array]';
}

function endsWith(haystack, needle) {
  return haystack.substr(-needle.length) == needle;
}

function startsWith(haystack, needle) {
  if (isArray(haystack)) {
    if (isArray(needle)) {
      return needle.every(function(val, idx) {
        return val == haystack[idx];
      });
    }
    return haystack.indexOf(needle) == 0;
  } else {
    return haystack.substr(0, needle.length) == needle;
  }
}

function stringifyFunctionName(func) {
  var name = func.name;
  if (!name) {
    name = func.toSource()
      .replace(/^function\s/, '') // remove leading 'function '
      .match(/^.[^(]]+/)[0]; // remove everything after the function name.
  }
  return fromCamelCaseToReadable(name);
}

function fromCamelCaseToReadable(camelCaseString) {
  var characters = camelCaseString.split('');
  return characters.map(addSpaceBeforeUpperCaseLetter).join('').toLowerCase();
}

function addSpaceBeforeUpperCaseLetter(character){
  if (character.toLowerCase() != character) {
    character = ' ' + character;
  }
  return character;
}
