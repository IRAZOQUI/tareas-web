var promise = new Promise(function (resolve, reject) {
    resolve(1234);
});
promise.then(function (res) {
    console.log('I get called:', res === 123); // va a dar false por la modificacion
});
promise["catch"](function (err) {
});
