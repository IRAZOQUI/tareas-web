Promise.resolve(123)
    .then(function (res) {
    console.log(res); //da 123
    return 456;
})
    .then(function (res) {
    console.log(res); //regresa el 456 de arriba dado
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); //vuelve a regresar lo de arriba
    return Promise.resolve(123);
});
