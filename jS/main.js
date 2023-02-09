//registro
let nombre
registro()

function registro(){
    let nombre = prompt("ingrese su nombre");
    if(nombre){
        alert("Bienvenido a optica Ruedas " + nombre + "!") 
        listaProductos()
    }
    else {
        alert("Debe ingresar un nombre")
        registro()
    }
}


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
    marca = prompt("Que marca deseas?\n1) Orbital\n2) Mormaii\n3) Vulk\n4) Rusty")
    marca = parseInt(marca)
   debugger
   if(marca > 4 || marca < 0){
            alert("El numero ingresado es incorrecto.")
    }  
    switch(marca){
        case 1:
           precio ("Orbital");
           break
        case 2:
            precio("Mormaii");
            break
        case 3:
            precio ("Vulk");
            break
        case 4:
            precio ("Rusty");
            break
        default:
}
}
function marcalentesReceta(){
    let marca;
    marca = prompt("Que marca deseas?\n1) Hannover\n2) Usual\n3)Amalfi \n4) Dandy\n5) Ahren")
    marca = parseInt(marca)

        if(marca > 5 || marca < 0){
            alert("El numero ingresado es incorrecto.")
        }

    switch(marca){
        case 1:
            precio ("Hannover");
            break
        case 2:
            precio ("Usual");
            break
        case 3:
            precio ("Amalfi");
            break
        case 4:
            precio ("Dandy");
            break
        case 5:
            precio ("Ahren");
            break
        default: // esto solo salta cuando es while solo y no do while-
    }
}

// Ejemplo a seguir
function lentesdeContacto(){
    let marca;
     marca = prompt("Que marca deseas?\n1) Lunare\n2) Proclear\n3) Coopervision\n4) Alcari")
     marca = parseint(marca)
        if(marca > 4 || marca < 0){
            alert("El numero ingresado es incorrecto.")
        }
    

    switch(marca){
        case 1:
            precio ("Lunare");
            break
        case 2:
            precio ("Proclear");
            break
        case 3:
            precio ("Coopervision");
            break
        case 4:
            precio ("Alcari");
            break
        default:
    }
}

// listaProductos()
// marcaProductos()
// marcalentesReceta()
// lentesdeContacto()

function precio(marca){
    if(marca === "Orbital"){
        pagar (15400);
    }
    else if(marca === "Mormaii"){
        pagar (19000);
    }
    else if(marca === "Vulk"){
        pagar (16500);
    }
    else if(marca === "Rusty"){
        pagar (13500);
    }
    else if(marca === "Hannover"){
        pagar (16000);
    }
    else if(marca === "Usual"){
        pagar (7600);
    }
    else if(marca === "Ahren"){
        pagar (12000);
    }
    else if(marca === "Amalfi"){
        pagar (12500);
    }
    else if(marca === "Dandy"){
        pagar (19000);
    }
    else if(marca === "Lunare"){
        pagar (13000);
    }
    else if(marca === "Proclear"){
        pagar (20200);
    }
    else if(marca === "Alcari"){
        pagar (17000);
    }
    else if(marca === "Coopervision"){
        pagar (11100);
    }
}
    



   function pagar(precio){ 
     
     let pago = prompt(`Usted esta por pagar $ ${precio}. Como desea pagar?\n1)Efectivo\n2)Transferencia\n3)Débito`)
     pago = parseInt(pago)
     if(pago == 1){
        let efectivo = prompt("Seleccionaste Efectivo, ingresa el monto con el que vas a abonar el producto")
        if (efectivo > precio) {
            alert("Gracias por tu compra, tu vuelto es: $" + (efectivo - precio));
            }else if (efectivo == precio) {
                alert("Gracias por tu compra, pagaste con la cantidad justa de dinero");
            }else{
                alert("El monto con el que deseas pagar no es suficiente para realizar la compra.");
           }
     }else if(pago == 2){
        alert("Envia el pago al alias Optica.ruedas y envianos el comprobante de pago a travez de WhatsApp\nLuego de esto podes pasar a retirar tu producto por el local cuando lo desees.")
        
     }else if(pago == 3){
        let numCard = prompt("Ingresa el número de tu tarjeta de débito, no compartiremos estos datos con nadie.")
        alert("Tu tarjeta nº "+ numCard +"fue validada con exito, gracias por la compra y disfruta de tu producto. Siempre cuidando tu vista.")
     }
}

