var obj = {x: 1, y:2, z: 3};
console.log(obj.y)
var {x, y , z} = obj;
console.log(y);
var array = [1, 2, 3];
console.log(array[0]); 
var [x, y, z] = array;
console.log(x); 
var array = [1, 2, 3, 4];
var [x, y, ...rest] = array;
console.log(x, y, rest);