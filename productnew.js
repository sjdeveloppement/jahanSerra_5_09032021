let product = {
    _id : "",
    name: "",
    description: "",
    price: 0, 
    imageUrl: ""
}
let arrayproduct = [];
let price = 0;

fetch('https://oc-p5-api.herokuapp.com/api/cameras').then(res => res.json())
.then(res => {
    for( data of res){
        arrayproduct.push(data)
        console.log(data)
    }
})

