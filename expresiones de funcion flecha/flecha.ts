var figura = {
    nombre: "ractangulo",
    popup: function() {
 
        console.log('Esta dentro popup(): ' + this.nombre);
 
        setTimeout( () => {
            console.log('Esta dentro setTimeout(): ' + this.nombre);
            console.log("yo soy " + this.nombre + "!");
        }, 3000);
 
    }
};
 
figura.popup();