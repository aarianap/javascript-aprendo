const producto = "MONITOR 24 PULGADAS";
//.replace para remplazar
console.log(producto);
console.log(producto.replace("PULGADAS","\"")); 
console.log(producto.replace("MONITOR","MONITOR CURVO"))
//.slice para cortar el primer parametro siepre tiene que ser menor que el segundo
console.log(producto.slice(0,10));
console.log(producto.slice(2,1))
//alternativa de slice
//es mejor porque si te da una salida si el primer parametro es mayor
console.log(producto.substring(0,10))
console.log(producto.substring(2,1))

//como sacar tu primera letra de tu nombre
const nombre = prompt("ingrese su nombre: ");
nombre_inicial = nombre.charAt(0);  
document.querySelector(".x").innerHTML =`${nombre_inicial}`;