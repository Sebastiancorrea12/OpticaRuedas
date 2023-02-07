//alert("hola")
let nombre = prompt("ingresa tu nombre")
let comprar = confirm("Deseas comprar un producto?");
let productos;
let marca;



if(comprar){
   productos = prompt(nombre + " que articulo deseas comprar?")
}
if(productos && productos.toLowerCase() == "lentes de sol"){
   marca = prompt("Selecciona la marca deseada")
}else if (productos && productos.toLowerCase() == "lentes de receta"){
    marca = prompt("Selecciona la marca deseada")
}else if(productos && productos.toLowerCase()== "lentes de contacto"){
    window.location.href = "../pages/contactologia.html"
}
if(marca && marca.toLowerCase() == "rayban"){
    window.location.href = "../pages/sol.html"
}else if (marca && marca.toLowerCase() == "rusty"){
    window.location.href = "../pages/sol.html"
}else if (marca && marca.toLowerCase() == "orbital"){
    window.location.href = "../pages/sol.html"
}else if (marca && marca.toLowerCase() == "vulk"){
    window.location.href = "../pages/sol.html"
}else if (marca && marca.toLowerCase() == "mormaii"){
    window.location.href = "../pages/sol.html"
}

//lentes de receta

if(marca && marca.toLowerCase() == "señal"){
    window.location.href = "../pages/recetados.html"
}else if(marca && marca.toLowerCase() == "hannover"){
    window.location.href = "../pages/recetados.html"
}else if(marca && marca.toLowerCase() == "usual"){
    window.location.href = "../pages/recetados.html"
}else if(marca && marca.toLowerCase() == "amalfi"){
    window.location.href = "../pages/recetados.html"
}else if(marca && marca.toLowerCase() == "dandy"){
    window.location.href = "../pages/recetados.html"
}




