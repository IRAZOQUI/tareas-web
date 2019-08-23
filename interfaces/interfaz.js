function area(figura) {
    var area = figura.ancho * figura.altura;
    return "Yo soy " + figura.color + " " + figura.nombre + " Con una area de " + area + " Cm cuadrados";
}
console.log(area({ nombre: "Rectangulo", ancho: 30, altura: 15 }));
console.log(area({ nombre: "cubo", ancho: 30, altura: 30, color: "Azul como el mar azul" }));
document.body.innerHTML = area({ nombre: "Rectangulo", ancho: 30, altura: 15 });
document.body.innerHTML = area({ nombre: "cubo", ancho: 30, altura: 30, color: "Azul como el mar azul" });
