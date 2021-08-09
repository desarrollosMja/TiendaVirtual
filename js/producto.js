class Producto{
    constructor(id, titulo, categoria, marca, precio){
        this.id = id;
        this.titulo = titulo;
        this.categoria = categoria;
        this.marca = marca;
        this.precio = precio;
    }
}

//Instanciar productos
let productos = [];
productos.push(new Producto(1,"Pan para panchos Bimbo","Panificados","Bimbo", 150));
productos.push(new Producto(2,"Lomo de atún enlatado La Campagnola","Conservas","La Campagnola", 279));
productos.push(new Producto(3,"Leche fortificada con hierro Sancor","Lacteos","Sancor", 115));
productos.push(new Producto(4,"Nuggets crocantes de pollo","Congelados","Granja del sol", 452));
productos.push(new Producto(5,"Shampoo anticaspa","Perfumeria","Loreal", 623));
productos.push(new Producto(6,"Harina 000","Almacen","Morixe", 67));
productos.push(new Producto(7,"Harina 0000","Almacen","Morixe", 75));
productos.push(new Producto(8,"Dulce de leche repostero","Almacen","San Ignacio", 167));
productos.push(new Producto(9,"Papel higiénico hoja simple","Higiene","Scott", 315));
productos.push(new Producto(10,"Detergente líquido para ropa","Limpieza","Skip", 715));

console.log(productos);