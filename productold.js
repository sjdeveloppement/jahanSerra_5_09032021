
main()
async function  main() {
    //test class
    /*class Product{
        constructor(id, name, price, description, imageUrl){
            this.id = id;
            this.name = name;
            this.price = price;
            this.description = description;
            this.imageUrl = imageUrl;
        }
        showProduct(){
            console.log("les infos du produits : " + this.description + ".")
        }

    }
    const newProduct = new Product();
    newProduct.showProduct();
    //fin test class
//////////////////////////////////////////////////////////////////////////////////////*/
    const product5 = await getProduct5();
    // j'attends que la promesse soit résolu avec await
    const product4 = await getProduct4();
    const product3 = await getProduct3();
    const product2 = await getProduct2();
    const product1 = await getProduct1();
    //const products = await getAllproduct();
    //for (product of products) {
        let params = (new URL(document.location)).searchParams;
let id = params.get('id');
//console.log(id)
if(id == '5be9c4c71c9d440000a730e9'){
    //console.log('bravo');
    getProduct5();
    showInfoProduct5(product5);
    
    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        localStorage.setItem('cart5', JSON.stringify(product5));   
       /* let pannier = localStorage.getItem('cart5');
        console.log(pannier);*/
    })
}
else if(id=='5be9c4471c9d440000a730e8'){
    
    //console.log('bravo');
    getProduct4();
    showInfoProduct4(product4);

    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        localStorage.setItem('cart4', JSON.stringify(product4));   
        /*let pannier = localStorage.getItem('cart4');
        console.log(pannier);*/
    })
}
else if(id=='5be9bc241c9d440000a730e7'){
    getProduct3();
    showInfoProduct3(product3);

    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        localStorage.setItem('cart3', JSON.stringify(product3));   
       /* let pannier = localStorage.getItem('cart3');
        console.log(pannier);*/
    })
}
else if(id=='5be1ef211c9d44000030b062'){
    getProduct2();
    showInfoProduct2(product2);
    
    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        localStorage.setItem('cart2', JSON.stringify(product2));   
        /*let pannier = localStorage.getItem('cart2');
        console.log(pannier);*/
    })
}
else {id=='5be1ed3f1c9d44000030b061'
    getProduct1();
    //getAllproduct(products);
    showInfoProduct1(product1);
    //showInfoAllProduct(products);
    

    
    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        localStorage.setItem('cart', JSON.stringify(product1));
        
        /*let pannier = localStorage.getItem('cart');
        console.log(pannier);*/
    })
    

    
    

}

        
}


/*function get product*/

//test
/*function getAllproduct(){
    return fetch("https://oc-p5-api.herokuapp.com/api/cameras")
    .then(function(httpBodyResponse){
        return httpBodyResponse.json()
    })
    .then(function(products){
        return products
    })
    .catch(function(error){
        alert(error)
    })
}*/
/*1*/
function getProduct1() {
    return fetch("https://oc-p5-api.herokuapp.com/api/cameras/5be1ed3f1c9d44000030b061")// ou en local http://localhost:3000/api/cameras/
    .then(function(httpBodyResponse){
       return httpBodyResponse.json()
    })
    .then(function(product1){
        return product1

    })
    .catch(function(error){
        alert(error)
    })
    
}

/*2*/
function getProduct2() {
    return fetch("https://oc-p5-api.herokuapp.com/api/cameras/5be1ef211c9d44000030b062")
    .then(function(httpBodyResponse){
       return httpBodyResponse.json()
    })
    .then(function(product2){
        return product2

    })
    .catch(function(error){
        alert(error)
    })
    
}
/*3*/
function getProduct3() {
    return fetch("https://oc-p5-api.herokuapp.com/api/cameras/5be9bc241c9d440000a730e7")
    .then(function(httpBodyResponse){
       return httpBodyResponse.json()
    })
    .then(function(product3){
        return product3

    })
    .catch(function(error){
        alert(error)
    })
    
}
/*4*/
function getProduct4() {
    return fetch("https://oc-p5-api.herokuapp.com/api/cameras/5be9c4471c9d440000a730e8")
    .then(function(httpBodyResponse){
       return httpBodyResponse.json()
    })
    .then(function(product4){
        return product4

    })
    .catch(function(error){
        alert(error)
    })
    
}
/**/ 
function getProduct5() {
    return fetch("https://oc-p5-api.herokuapp.com/api/cameras/5be9c4c71c9d440000a730e9")
    .then(function(httpBodyResponse){
       return httpBodyResponse.json()
    })
    .then(function(product5){
        return product5
        

    })
    .catch(function(error){
        alert(error)
    })
    
}
/*functions showinfo*/
//test
/*function showInfoAllProduct(products){
    document.getElementById('main_product').innerHTML+=`<div class="img-product"><img src="${products.imageUrl}" alt="zurss 50s" id="productImage"></div>
    <div class="info-product">
        <h1 id="productName">${products.name}</h1>
        <p class="descript-product" id="productDescription">${products.description}</p>
        <p class="price-product" id="productPrice">${products.price}€</p>
    </div>
    <div class="custom-product"><label for="product-lenses">Objectif :</label>
        <select name="product_lenses" id="lenses-select" class="btn-order">
            <option  value="1">${products.lenses}</option>
            <option  value="1">${products.lenses}</option>
            
        </select>
    </div>
    <div class="btn-addToCart"><input type="submit" class="btn-order" value="Ajouter au panier" id="addToCart"></div>`
}*/
//
/*1*/
function showInfoProduct1(product1){
    document.getElementById('main_product').innerHTML+=`<div class="img-product"><img src="${product1.imageUrl}" alt="zurss 50s" id="productImage"></div>
    <div class="info-product">
        <h1 id="productName">${product1.name}</h1>
        <p class="descript-product" id="productDescription">${product1.description}</p>
        <p class="price-product" id="productPrice">${product1.price}€</p>
    </div>
    <div class="custom-product"><label for="product-lenses">Objectif :</label>
        <select name="product_lenses" id="lenses-select" class="btn-order">
            <option  value="1">${product1.lenses[0]}</option>
            <option  value="1">${product1.lenses[1]}</option>
            
        </select>
    </div>
    <div class="btn-addToCart"><input type="submit" class="btn-order" value="Ajouter au panier" id="addToCart"></div>`
}
/*2*/
function showInfoProduct2(product2){
    document.getElementById('main_product').innerHTML+=`<div class="img-product"><img src="${product2.imageUrl}" alt="hirsh 400dts" id="productImage"></div>
    <div class="info-product">
        <h1 id="productName">${product2.name}</h1>
        <p class="descript-product" id="productDescription">${product2.description}</p>
        <p class="price-product" id="productPrice">${product2.price}€</p>
    </div>
    <div class="custom-product"><label for="product-lenses">Objectif :</label>
        <select name="product_lenses" id="lenses-select" class="btn-order">
            <option  value="1">${product2.lenses[0]}</option>
            <option  value="1">${product2.lenses[1]}</option>
            <option  value="1">${product2.lenses[2]}</option>
            
        </select>
    </div>
    <div class="btn-addToCart"><input type="submit" class="btn-order" value="Ajouter au panier" id="addToCart"></div>`
}

/*3*/
function showInfoProduct3(product3){
    document.getElementById('main_product').innerHTML+=`<div class="img-product"><img src="${product3.imageUrl}" alt="franck js 105" id="productImage"></div>
    <div class="info-product">
        <h1 id="productName">${product3.name}</h1>
        <p class="descript-product" id="productDescription">${product3.description}</p>
        <p class="price-product" id="productPrice">${product3.price}€</p>
    </div>
    <div class="custom-product"><label for="product-lenses">Objectif :</label>
        <select name="product_lenses" id="lenses-select" class="btn-order">
            <option  value="1">${product3.lenses[0]}</option>
            
        </select>
    </div>
    <div class="btn-addToCart"><input type="submit" class="btn-order" value="Ajouter au panier" id="addToCart"></div>`
}
/*4*/
function showInfoProduct4(product4){
    document.getElementById('main_product').innerHTML+=`<div class="img-product"><img src="${product4.imageUrl}" alt="kuro" id="productImage"></div>
    <div class="info-product">
        <h1 id="productName">${product4.name}</h1>
        <p class="descript-product" id="productDescription">${product4.description}</p>
        <p class="price-product" id="productPrice">${product4.price}€</p>
    </div>
    <div class="custom-product"><label for="product-lenses">Objectif :</label>
        <select name="product_lenses" id="lenses-select" class="btn-order">
            <option  value="1">${product4.lenses[0]}</option>
            <option  value="1">${product4.lenses[1]}</option>
        </select>
    </div>
    <div class="btn-addToCart"><input type="submit" class="btn-order" value="Ajouter au panier" id="addToCart"></div>`
}
/*5*/
function showInfoProduct5(product5){
    document.getElementById('main_product').innerHTML+=`<div class="img-product"><img src="${product5.imageUrl}" alt="katatone" id="productImage"></div>
    <div class="info-product">
        <h1 id="productName">${product5.name}</h1>
        <p class="descript-product" id="productDescription">${product5.description}</p>
        <p class="price-product" id="productPrice">${product5.price}€</p>
    </div>
    <div class="custom-product"><label for="product-lenses">Objectif :</label>
        <select name="product_lenses" id="lenses-select" class="btn-order">
            <option  value="1">${product5.lenses[0]}</option>
            <option value="2">${product5.lenses[1]}</option>
        </select>
    </div>
    <div class="btn-addToCart"><input type="submit" class="btn-order" value="Ajouter au panier" id="addToCart"></div>`
}



/*Ajout dans le panier*/
/*test// function storage(){
    window.localStorage.cart = 'hi';
}
const tabCart = document.getElementById('tab-cart');*/



//Récupération des elements pour les integrer au local storage



//test





