function receivesAFunction(callback) {
  return callback();
}

function callback() {
  return `I have a callback function!`;
}

function returnsANamedFunction() {
  return function returnedFunction() {
    return `I returned a named function!`;
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    return `I returned a anonymous function`;
  };
}
