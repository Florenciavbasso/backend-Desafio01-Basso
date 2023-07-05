class ProductManager{
    constructor(){
        this.products = [];
    }

    //Obtener todos los productos
    getProducts = () => {
        return this.products;
    }

    //Funcion para agregar productos
    addProducts = (title, description, price, thumbnail, code, stock) =>{
        const product = {title,description,price,thumbnail,code,stock};

        //Generar un id 
        if (this.products.length === 0){
            product.id = 1;
        } else{
            product.id = this.products[this.products.length - 1].id + 1;
        }
        this.products.push(product);
    }

    //Obtener un producto segun su id
    getProductById = (categoryId) => {
        const product = this.products.find((product) => product.id === categoryId);
        if (product){
            return product;
        } else{
            console.log('Not Found');
        }
    }
}

const createProducts = new ProductManager();

//Agregar productos con funcion addProducts
createProducts.addProducts(
    "T-shirt Mickey",
    "Remera de manga corta oversized con diseño Disney",
    1290,
    "Remera-estampada-Disney.jpg",
    101,
    20
);
createProducts.addProducts(
    "Sweater Vintage",
    "Buzo oversized con diseño Vintage",
    2690,
    "buzo-oversized-vintage.jpg",
    201,
    15
);
createProducts.addProducts(
    "Gorro de lana",
    "Gorro de lana tejido color celeste",
    690,
    "gorro-invierno-celeste.jpg",
    301,
    5
);

//Obtener todos los productos
console.log(createProducts.getProducts());

//Obtener productos por su id
createProducts.getProductById(1);
createProducts.getProductById(2);
createProducts.getProductById(3);