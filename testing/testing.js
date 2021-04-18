
function expect(a) {
  return {

    toEqual: function(b){
      if (a == b) {
        console.log("Pass")
      }
      else {
        console.log("Fail")
      }
    },

    isAnArray: function(b) {
      var result = (a.length === b.length && a.every((v, i) => v === b[i]));
      console.log(result)
      }
    }
  }

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}

