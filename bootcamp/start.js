// *** Question ***
// Write a function sum

sum(1)(2)(3)(4)(5)(result => console.log('result', result));

executeArgument(result => console.log('result', result));

function executeArgument(callback) {
  const innerResult = 99;

  callback(innerResult);
}


// this would log "result 99"

// Combinining the above concepts, you get the solution:

function sum(a) {
  // outer scope
  return function(b) {
    // inner scope
    return function(c) {
      return function(d) {
        return function(e) {
          const total = a + b + c + d + e;

          return function(callback) {
            callback(total);
          }
        }
      }
    }
  };
}