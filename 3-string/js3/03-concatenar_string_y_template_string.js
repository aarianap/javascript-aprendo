const producto = "Monitor de 24 pulgadas";
const precio = "100"
//concatenar con el metodo ".concat"
console.log(producto.concat(precio));
//concatenar con "+" tambien funciona con ","
console.log(producto + " con el precio de: $" + precio);
//concatenar con "``"(template string) se concatena con ${}
console.log(`${producto} con el precio de: $${precio}`)

