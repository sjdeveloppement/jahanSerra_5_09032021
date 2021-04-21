main()
async function main() {
    const products = await getProducts()// j'attends que la promesse soit résolu avec await
    for (product of products) {
        console.log(product);

    displayProduct(product)

    }
}
//  fetch get api product
function getProducts() {
    return fetch("https://oc-p5-api.herokuapp.com/api/cameras")
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function (products) {
            return products

        })
        .catch(function (error) {
            alert(error)
        })
}
/*affichage produit liste dynamique*/
function displayProduct(product) {
    document.getElementById("productlist").innerHTML += `
    <div class="align-list"><a href="product.html?id=${product._id}">
                    <div class="card"><img src="${product.imageUrl}" alt="image_zurss">
                        <div class="card-item">
                            <div class="card-title">${product.name}</div>
                            <div class="card-price">${product.price}€</div>
                        </div>
                    </div>
                </a><div>
                
            `
}