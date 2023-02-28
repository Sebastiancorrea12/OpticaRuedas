
//Persona
function validarEmail(valor){
    const emailPermitido = "@gmail.com"
    return valor.endsWith(emailPermitido)
}
function contieneCaracteresEspeciales(texto){
    const caracteresNoPermitidos = /[-,.(){}|!#/?+_*&^%$@ :;]/;
    return caracteresNoPermitidos.test(texto) || !texto
}
function contieneNumeros(texto){
    const numerosNoPermitidos = /[1234567890]/;
    return numerosNoPermitidos.test(texto) || !texto
}


class Persona{
    nombre;
    apellido;
    email;

    constructor() {}
    setNombre(nombre){
        this.nombre = nombre;
    }
    setApellido(apellido){
        this.apellido = apellido;
    }
    setEmail(email){
        this.email = email;
    }
    mostrardatos(){
        console.log(this.nombre, this.apellido, this.email)
    }
    
}
const persona1 = new Persona();


persona1.nombre = prompt("ingrese su nombre");

if(persona1.nombre){
    alert("nombre correcto")
   
}
else {
    alert("Debe ingresar un nombre")
    
}
persona1.apellido = prompt("ingrese su apellido");
if(persona1.apellido){
    alert("Bienvenido a Optica Ruedas " + persona1.nombre + " " + persona1.apellido)
    
}else{
    alert("Ingresa tu apellido")
}
do {
    persona1.email = prompt("Ingresa tu Email")
    if(validarEmail(persona1.email)){
        alert("Tu email es " + persona1.email)
    }else{
        alert("Tu direccion de Email es incorrecta, intentalo de nuevo")
    }
}while (!validarEmail(persona1.email))



persona1.mostrardatos()


function producto (id, marca, precio){
    this.id = id;
    this.marca = marca;
    this.precio = precio;
}

const arrProductos = []
arrProductos.push(new producto(1, "Ahren", 12000))
arrProductos.push(new producto(2, "Hannover", 16000))
arrProductos.push(new producto(3, "Usual", 7600))
arrProductos.push(new producto(4, "Amalfi", 12500))

//Pidiendo datos
let lentesdeReceta;
do{
    lentesdeReceta = prompt("Que marca deseas?\n1) Ahren\n2) Hannover\n3)Usual\n4) Amalfi")
    var prodBuscado = arrProductos.find(producto=> producto.id == lentesdeReceta) 
alert("El precio de tu producto es de " + prodBuscado.precio + "Gracias por tu compra!!")
}while (lentesdeReceta < 1 || lentesdeReceta > 4)


const resultado = arrProductos.find(producto => producto.id )



