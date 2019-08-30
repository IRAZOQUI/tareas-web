function area(forma:string, ancho:number, altura:number){
    var area= ancho*altura;
    return "Yo soy " + forma + " Con una area de " + area + " Cm cuadrados";
}
document.body.innerHTML = area ("rectangulo", 30, 15);