let voir = localStorage.getItem('ordered');
voir = JSON.parse(voir)
console.log(voir);
//function affichage confirmation
function showConfirm(){
    if(voir!=null){
        const main = document.getElementById('main-confirm');
        infOrder = `<h1 id="title-confirm">Merci pour votre commande !</h1>
        <div class="text-confirm"><p>Le numéro de la commande est : ${voir.orderId}</p>
            <br>
            <p>Le montant total de cette commande est de : ${JSON.parse(localStorage.getItem('totalorder'))} €</p></div>
            
        <a href="index.html"><button id="orderBack">retour</button></a>`
        main.insertAdjacentHTML("afterbegin",infOrder);
    }
    clearBack();
}
showConfirm();
// delete localStorage btn retour clicked
function clearBack(){
    let back = document.getElementById('orderBack');
    back.addEventListener('click',(event)=>{
        event.preventDefault();
        localStorage.clear();
        window.location.href="index.html";
    })
}
// delete localStorage for back to cart or indexpage
function clearIt(){
    localStorage.clear();
}
let logo = document.getElementById("logoAfterConfirm");
logo.addEventListener('click',function(event){
    clearIt();
});
let cartConfirmed = document.getElementById("cartAfterConfirm");
cartConfirmed.addEventListener('click',function(event){
    clearIt();
});

