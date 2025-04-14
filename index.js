const productos = [  
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
    ];

class CallBacks {
   mostrarDatos = (producto) => {
      console.log(producto.nombre + " - " + producto.precio)
    };
   mapearDatos = (producto) => {
      return producto.nombre
   }
   mapearDatosMensaje = (producto) => {
      return "El producto: " + producto.nombre + " cuesta $" + producto.precio + " y pertenece a la categoría " + producto.categoria;
   }
   filtrarDatosCategoria = (producto) => {
      if (producto.categoria == "Ropa") {
         return producto
      }
   }
   filtrarDatosPrecio = (producto) => {
      if (producto.precio > 3000) {
         return producto
      }
   }
 }   

 const callbacks = new CallBacks();
 // PARTE 1 
 console.log("1")

 console.log(productos[0].nombre)

 console.log("2")

 for (let index = 0; index < productos.length; index++) {
    console.log(productos[index].nombre + " - " + productos[index].precio)
    
 }

 console.log("3")

 productos.forEach(callbacks.mostrarDatos)


 // PARTE 2

 console.log("4")

 console.log(productos.map(callbacks.mapearDatos))
 
 console.log("5")

 console.log(productos.filter(callbacks.filtrarDatosCategoria))

 console.log("6")

 console.log(productos.filter(callbacks.filtrarDatosPrecio))

 console.log("7")

 console.log(productos.find((producto) => producto.nombre == "Gorra"))

 // PARTE 3

 console.log("8")

 console.log(productos.some((producto) => producto.precio > 10000))

 console.log("9")
 
 console.log(productos.every((producto) => producto.precio > 1000))

 console.log("10")

 console.log(productos.map(callbacks.mapearDatos).includes("Campera"))

 // PARTE 4
 
 console.log("11")


 console.log(productos.sort((a,b) => a.precio - b.precio))

 productos.sort((a,b) => a.id - b.id)

 console.log("12")

 console.log(productos.map(callbacks.mapearDatosMensaje))

 console.log("13")

 const nuevosProductos = [
   { id: 6, nombre: "Smartphone", precio: 200, categoria: "Electrónica" },
   { id: 7, nombre: "Libro", precio: 800, categoria: "Libros" },
 ];

 const sumaProductos = [...productos, ...nuevosProductos]

 console.log(sumaProductos)