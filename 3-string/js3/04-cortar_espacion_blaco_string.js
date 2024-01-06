const producto = "          monitor de 24 pulgados        "
console.log(producto)
console.log(producto.length)
//se ilimina los espacios del inicio con el metodo  ".trimStar"
console.log(producto.trimStart())   
//se eimina los espacios del final
console.log(producto.trimEnd())
//ilimina espacios del inicio y final
console.log(producto.trim())
// hace lo mismo que .trim 
console.log(producto.trimStart().trimEnd())
