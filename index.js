function callBack() {}
function Val() {}


function receivesAFunction(callBack) {
    return callBack();
}

function returnsANamedFunction() {
    return function Val() {};
}

function returnsAnAnonymousFunction() {
    return () => ""
}