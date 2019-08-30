function echo<T>(arg: T) : T {
return arg;
}
let a = echo<number>(1); 
let b = echo<String>("Hola mundo"); 
function echo(arg) {
return arg;
}
var a = echo(1); 
var b = echo("Hola mundo"); 