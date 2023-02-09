//registro
let nombre


function registro(){
    let nombre = prompt("ingrese su nombre");
    while(nombre ===""){ 
     nombre = prompt("ingrese su nombre")
}   alert("Bienvenido a optica Ruedas " + nombre + "!")  
}
registro()

//funciones

function listaProductos(){
    let producto;

    do{
        producto = parseInt(prompt("Que lentes deseas comprar?\n1) Lentes de sol\n2) Lentes de receta\n3) Lentes de contacto"))
        if(producto > 3 || producto < 0){
            alert("El numero ingresado es incorrecto.")
        }
    }
    while(producto < 0 || producto > 3)
        
    

    switch(producto){
        case 1:
            return marcaProductos();
        case 2:
            return marcalentesReceta();
        case 3: 
            return lentesdeContacto();
}
}
function marcaProductos(){
    let marca;

    do{
        marca = parseInt(prompt("Que marca deseas?\n1) Orbital\n2) Mormaii\n3) Vulk\n4) Rusty"))
        if(marca > 4 || marca < 0){
            alert("El numero ingresado es incorrecto.")
        }
    }
    while(marca < 5 || marca  > 1)

    switch(marca){
        case 1:
            return "Orbital";
        case 2:
            return "Mormaii";
        case 3:
            return "Vulk";
        case 4:
            return "Rusty";
    }
}
function marcalentesReceta(){
    let marca;

    do{
        marca = parseInt(prompt("Que marca deseas?\n1) Hannover\n2) Usual\n3)Amalfi \n4) Dandy\n5) Ahren"))
        if(marca > 5 || marca < 0){
            alert("El numero ingresado es incorrecto.")
        }
    }
    while(marca < 0 || marca  > 5)

    switch(marca){
        case 1:
            return "Hannover";
        case 2:
            return "Usual";
        case 3:
            return "Amalfi";
        case 4:
            return "Dandy";
        case 5:
            return "Ahren";
        default: return alert("este numero no esta disponible") // esto solo salta cuando es while solo y no do while-
    }
}

// Ejemplo a seguir
function lentesdeContacto(){
    let marca;

    do{
        marca = parseInt(prompt("Que marca deseas?\n1) Lunare\n2) Proclear\n3) Coopervision\n4) Alcari"))
        if(marca > 4 || marca < 0){
            alert("El numero ingresado es incorrecto.")
        }
    }
    while(marca < 0 || marca  > 4) //(cuando la condicion de while no se cumpla o sea falsa, vuelve al do)

    switch(marca){
        case 1:
            return "Lunare";
        case 2:
            return "Proclear";
        case 3:
            return "Coopervision";
        case 4:
            return "Alcari";
    }
}

listaProductos()
marcaProductos()
marcalentesReceta()
lentesdeContacto()

function precio(marca){
    if(marca === "Orbital"){
        return 15400;
    }
    else if(marca === "Mormaii"){
        return 19000;
    }
    else if(marca === "Vulk"){
        return 16500;
    }
    else if(marca === "Rusty"){
        return 13500;
    }}
//     else if(marca === "Hannover"){
//         return 16000;
//     }
//     else if(marca === "Usual"){
//         return 7600;
//     }
//     else if(marca === "Ahren"){
//         return 12000;
//     }
//     else if(marca === "Amalfi"){
//         return 12500;
//     }
//     else if(marca === "Dandy"){
//         return 19000;
//     }
//     else if(marca === "Lunare"){
//         return 13000;
//     }
//     else if(marca === "Proclear"){
//         return 20200;
//     }
//     else if(marca === "Alcari"){
//         return 17000;
//     }
//     else if(marca === "Coopervision"){
//         return 11100;
//     }
// }
    
// precio()


   function pagar(precio,marca)
     {alert("estas a punto de comprar" + marca +"\nPor un precio de: $" + precio)}
     let pago = prompt("Como deseas pagar?\n1)Efectivo\n2)Transferencia\n3)Débito")
     switch(pago){
         case "1":
       let efectivo = prompt("Seleccionaste Efectivo, ingresa el monto con el que vas a abonar el producto")
       if (efectivo > precio) {
         alert("Gracias por tu compra, tu vuelto es: $" + (efectivo - precio));
         }else if (efectivo == precio) {
             alert("Gracias por tu compra, pagaste con la cantidad justa de dinero");
         }else{
             alert("El monto con el que deseas pagar no es suficiente para realizar la compra.");
         }
         break;
     case "2":
       alert("Envia el pago al alias Optica.Ruedas y envianos el comprobante de pago a travez de WhatsApp\nLuego de esto podes pasar a retirar tu producto por el local cuando lo desees.")
       break;
     case "3":
       let numCard = prompt("Ingresa el número de tu tarjeta de débito, no compartiremos estos datos con nadie.")
       alert("Tu tarjeta nº "+ numCard +"fue validada con exito, gracias por la compra y disfruta de tu producto.")
       break;
 } 

pagar()
// efectivo()