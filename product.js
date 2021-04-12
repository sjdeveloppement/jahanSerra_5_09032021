main()
async function  main() {
  
    
    // j'attends que la promesse soit résolu avec await
    
    const products = await getAllproduct();
    
        let params = (new URL(document.location)).searchParams;
let id = params.get('id');

if(id == '5be9c4c71c9d440000a730e9'){
  
    getAllproduct(products[4]);
    showInfoAllProduct(products[4]);
    
    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        //localStorage.setItem('cart5', JSON.stringify(products[4]));
        //let val = JSON.stringify(products[4]);
        // window.localStorage.setItem('tabcart',val);
        data = products[4];  
        SaveDataToLocalStorage(data);  
       
    })
}
else if(id=='5be9c4471c9d440000a730e8'){
    
    
    getAllproduct(products[3]);
    showInfoAllProduct(products[3]);

    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        //localStorage.setItem('cart4', JSON.stringify(products[3])); 
        //let val = JSON.stringify(products[3]);
        // window.localStorage.setItem('tabcart',val);
        data = products[3];  
        SaveDataToLocalStorage(data); 
       
    })
}
else if(id=='5be9bc241c9d440000a730e7'){
    getAllproduct(products[2]);
    showInfoAllProduct(products[2]);

    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        //localStorage.setItem('cart3', JSON.stringify(products[2]));
        //let val = JSON.stringify(products[2]);
         //window.localStorage.setItem('tabcart',val);
         data = products[2];    
         SaveDataToLocalStorage(data);
       
    })
}
else if(id=='5be1ef211c9d44000030b062'){
    getAllproduct(products[1]);
    showInfoAllProduct(products[1]);
    
    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
        //localStorage.setItem('cart2', JSON.stringify(products[1]));
       // let val = JSON.stringify(products[1]);
        // window.localStorage.setItem('tabcart',val);
        //let test = [];

        //test.push(JSON.parse(localStorage.getItem('session')));
        //localStorage.setItem('session',JSON.stringify(test));
        data = products[1];   
        SaveDataToLocalStorage(data);
    })
}
else {id=='5be1ed3f1c9d44000030b061'
    getAllproduct(products[0]);
    showInfoAllProduct(products[0]);
    

    let addCart = document.getElementById('addToCart');
    addCart.addEventListener('click',(event)=>{
         //localStorage.setItem('cart', JSON.stringify(products[0]));
         //let val = JSON.stringify(products[0]);
        // let tabtest = [];
         //tabtest.push(val);
         //localStorage.setItem('tabtest',val);
         //window.localStorage.setItem('tabcart',val);
        //let test = [];
        //localStorage.setItem('session',JSON.stringify(test));
        
        //test.push(JSON.parse(localStorage.getItem('session')));
        data = products[0];
         SaveDataToLocalStorage(data);
         
         
         
         
    })
    
}
function SaveDataToLocalStorage(data){
    //si il y a déjà des produits dans le local storage
    test = JSON.parse(localStorage.getItem('session'));
    if(test){
        test.push(data);
        localStorage.setItem('session',JSON.stringify(test));
        popupConfirmation();
//sinon le localstorage est vide il faut donc le remplir
    }else{
        test = [];
        test.push(data);
        localStorage.setItem('session',JSON.stringify(test));
        popupConfirmation();

    }
    
    
}
//function popup confirmation ajout panier
const popupConfirmation = () =>{
    if(window.confirm(`${data.name} au prix : ${data.price} a bien été ajouté au panier`)){
        window.location.href = "panier.html";
    }else{
        window.location.href = "index.html";

    }
}
}


/*function get product*/

//test
function getAllproduct(){
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
}
/*functions showinfo*/
//test
function showInfoAllProduct(products){
    document.getElementById('main_product').innerHTML+=`<div class="img-product"><img src="${products.imageUrl}" alt="${products.name}" id="productImage"></div>
    <div class="info-product">
        <h1 id="productName">${products.name}</h1>
        <p class="descript-product" id="productDescription">${products.description}</p>
        <p class="price-product" id="productPrice">${products.price}€</p>
    </div>
    <div class="custom-product"><label for="product-lenses">Objectif :</label>
        <select name="product_lenses" id="lenses-select" class="btn-order">
            <option  value="1">${products.lenses[0]}</option>
            <option id="opt2" value="2">${products.lenses[1]}</option>
            <option id="opt3" value="3">${products.lenses[2]}</option>
        </select>
    </div>
    <br>
    <div class="btn-addToCart"><input type="submit" class="btn-order" value="Ajouter au panier" id="addToCart"></div>`
            if(products.lenses[1] == undefined){
                let opt2 = document.getElementById("opt2");
                opt2.classList.add("displayopt3");
            }
            if(products.lenses[2] == undefined){
                let opt3 = document.getElementById("opt3");
                opt3.classList.add("displayopt3");
            }                              
}










