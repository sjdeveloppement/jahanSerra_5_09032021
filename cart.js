// ici je dois faire un tableau dans le localstorage et inserer les objets javascript puis afficher à la suite les infos nom et prix dans le panier
// calcul prix total du panier avec reducer
function showcartLocalStorage() {

    const session = JSON.parse(localStorage.getItem('session'));
    
    //affichage des produits du panier
    const tabCart = document.getElementById('tab-cart');
    //si panier vide
    if (session === null || session == 0) {

        const emptyCart =
            `<tr>
    <td> panier vide</td>   
    <td>  €</td>
</tr>`;
        tabCart.innerHTML = emptyCart;

    } else {
        //si le panier est plein on affiche le produit
        let Cart = [];
        for (i = 0; i < session.length; i++) {
            
            Cart = Cart + `<tr>        
    <td>${session[i].name}</td>   
    <td> ${session[i].price} €</td>
    <td><button id="trash"><i class="fas fa-trash"></i></button></td>
    </tr>`;}
    if (i == session.length) {
    //injection html dans la page panier
    // selection de la classe où injecter l'html
        tabCart.innerHTML = Cart;
    }
        }
// suppression des articles
let trash = document.querySelectorAll("#trash");

// selection de l'id du produit
for(let j=0; j < trash.length; j++){
    trash[j].addEventListener("click",(event)=>{
        event.preventDefault();
        
        
        // suppression du localStorage
        localStorage.clear();
        window.location.href="panier.html";

        
        /*// select id du produit qui va être delete
        let id_selected_delete= session[j].id_selected;
        // avec filter
        session = session.filter( el => el.id_selected !== id_selected_delete);
        console.log(session);*/
    })
}
//TOTAL cart
let totalPrice = [];
if(session ==null){
    console.log('panier vide');
}else{
  for(let k=0; k < session.length; k++){
   let productPriceInCart=session[k].price;
   totalPrice.push(productPriceInCart)
    //console.log(totalPrice);

}  
}

//addition
const reducer = (accumulator, currentValue)=> accumulator +currentValue;
const total = totalPrice.reduce(reducer,0);

//console.log(total);
totalorder = localStorage.setItem('totalorder',total);
const totCart = document.getElementById('TotPrice');
// html prix total
const showPriceHTML=`<td id="TotPrice">${total} </td>`
totCart.insertAdjacentHTML('afterbegin',showPriceHTML);
produit = session;




//////////////////////////////////
/* Form validation*/
//firstName
/**
 * Validate firstName function with regualr expression
 * 
 * If firstName isn't valid then return false
 * 
 * 
 * @return Boolean
 */
 function validateFirstName(){
    let firstName = document.getElementById('firstName').value;
    
    var firstNameReg = new RegExp(/^[A-Za-zâéèêûô-]*$/i);
    var valid = firstNameReg.test(firstName);
    

    if(!valid || firstName=="") {
        return false;
    } else {
        return true;
    }
}

//LastName
/**
 * Validate LastName function with regualr expression
 * 
 * If LastName isn't valid then return false
 * 
 * 
 * @return Boolean
 */
 function validateLastName(){
    let lastName = document.getElementById('lastName').value;
    
    var lastNameReg = new RegExp(/^[A-Za-zâéèêûô-]*$/i);
    var valid = lastNameReg.test(lastName);
    

    if(!valid || lastName=="") {
        return false;
        
    } else {
        return true;
    }
}

//email
/**
 * Validate email function with regualr expression
 * 
 * If email isn't valid then return false
 * 
 * 
 * @return Boolean
 */
 function validateEmail(){
    let email = document.getElementById('email').value;
    
    var emailReg = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i);
    var valid = emailReg.test(email);
    

    if(!valid || email=="") {
        return false;
    } else {
        return true;
    }
}

//city
/**
 * Validate city function with regualr expression
 * 
 * If city isn't valid then return false
 * 
 * 
 * @return Boolean
 */
 function validateCity(){
    let city = document.getElementById('city').value;
    
    var cityReg = new RegExp(/^[A-Za-zâéèêûô-]*$/i);
    var valid = cityReg.test(city);
    

    if(!valid || city=="") {
        return false;
    } else {
        return true;
    }
}
//adress
/**
 * Validate adress function with regualr expression
 * 
 * If adress isn't valid then return false
 * 
 * 
 * @return Boolean
 */
 function validateAddress(){
    let address = document.getElementById('address').value;
    
    var addressReg = new RegExp(/^[A-Za-zâéèêûô\s0-9-]*$/i);
    var valid = addressReg.test(address);
    
    

    if(!valid || address=="") {
        return false;
    } else {
        return true;
        
    }
}

// event btn order
let btnorder = document.getElementById('order');
let contactValue = [];
btnorder.addEventListener('click', (event)=>{
    event.preventDefault();

    //firstName
    if(validateFirstName()){
        
        contactValue.push(firstName.value);
    } else {
        //alert("Prénom invalide");
        let alertFirstName = document.getElementById('firstName');
        alertFirstName.insertAdjacentText("afterend",' champ invalide');
        alertFirstName.classList.add('danger');
        alertFirstName.addEventListener('click',function(){
           
            alertFirstName.classList.remove('danger');

        })}
    //lastname
    if(validateLastName()){
        
        contactValue.push(lastName.value);
    } else {
        
        let alertlastName = document.getElementById('lastName');
        //alert("Nom invalide");
        alertlastName.insertAdjacentText("afterend",' champ invalide');
        alertlastName.classList.add('danger');
        alertlastName.addEventListener('click',function(){
           
            alertlastName.classList.remove('danger');

        })
    }

    //city
    if(validateCity()){
       
        contactValue.push(city.value);
    } else {
        //alert("Ville invalide");
        let alertcity = document.getElementById('city');
        alertcity.insertAdjacentText("afterend",' champ invalide');
        alertcity.classList.add('danger');
        alertcity.addEventListener('click',function(){
           
            alertcity.classList.remove('danger');

        })
    }
    //address
    if(validateAddress()){
        
        contactValue.push(address.value);
    } else {
        //alert("Adresse invalide");
        let alertaddress = document.getElementById('address');
        alertaddress.insertAdjacentText("afterend",' champ invalide');
        alertaddress.classList.add('danger');
        alertaddress.addEventListener('click',function(){
           
            alertaddress.classList.remove('danger');

        })
    }

    //email
if(validateEmail()){
    contactValue.push(email.value);
} else {
    //alert("Email invalide");
    let alertemail = document.getElementById('email');
    alertemail.insertAdjacentText("afterend",' champ invalide');
        alertemail.classList.add('danger');
        alertemail.addEventListener('click',function(){
           
            alertemail.classList.remove('danger');

        })
    
}
// envoi du tab contact avec les infos du client

if(contactValue.length == 5 && session != null){
    
const contact ={firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value} 
    //console.log(contact);
//JSON.stringify(contactValue);


//objet contact in local storage
localStorage.setItem("contact",JSON.stringify(contact));
//
//test parse objet contact
contactObj = JSON.parse(localStorage.getItem('contact'));
//console.log(contact);
//
produit = JSON.parse(localStorage.getItem('session'));

console.log(produit);


for(m=0; m < produit.length; m++){
    var result = produit[m]._id;

}
products=[];
products.push(result) ;
//console.log(products);
//JSON.stringify(product);

const jsonBody ={
    contact,products
};
  
  //console.log(jsonBody);  
    
    //test envoi en xmlhttprequest et crée une nouvelle clé avec les valeurs retourné par le serveur suite à la commande puis redirige vers confirm.html
function postForm(){
    let order = new XMLHttpRequest();
    order.open("POST","https://oc-p5-api.herokuapp.com/api/cameras/order");
    order.setRequestHeader("Content-Type","application/json");
    order.send(JSON.stringify(jsonBody));
    order.addEventListener("load",function(event){
        //console.log(event.target.responseText);
        localStorage.setItem('ordered',event.target.responseText);
        window.location.assign('confirm.html');
        
    })
    order.addEventListener("error",function(event){
        alert('oups erreur lors de l\'envoi');
    })
    //console.log(order);

}
    postForm();
  //fin test xml/////////////////////  

    // test avec fetch
    /*//FONCTION envoieVersServeur()------------------------------------------------------
    function envoieVersServeur(jsonBody) {
        //Envoie de l'objet "aEnvoyer" vers le serveur
        fetch("https://oc-p5-api.herokuapp.com/api/cameras/order", {           //en ligne  http://localhost:3000/api/cameras/order
        method: "POST",
        headers: {
            "Accept":"application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonBody)
    })
    .then((response)=>{
        return response.json();
    })
    .then(()=>{
        localStorage.setItem("contact",JSON.stringify(jsonBody));
        console.log(jsonBody);
    })
    .catch(error=>{
        console.log(error);
    })
        
    }
    //console.log(jsonBody);
    //console.log(JSON.stringify(jsonBody));
    envoieVersServeur();*/
    
}else if(session != null){
    //alert('veuillez remplir correctement votre formulaire');
    
    setTimeout(function(){document.location.reload();},1000);
     //rechargement de la page panier
}
else{
    alert('Votre panier est vide');
}

})



/////////////////////////////////
}    
showcartLocalStorage();



