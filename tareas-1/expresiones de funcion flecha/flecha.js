var figura = {
    nombre: "ractangulo",
    popup: function () {
        var _this = this;
        console.log('Esta dentro popup(): ' + this.nombre);
        setTimeout(function () {
            console.log('Esta dentro setTimeout(): ' + _this.nombre);
            console.log("yo soy " + _this.nombre + "!");
        }, 3000);
    }
};
figura.popup();
