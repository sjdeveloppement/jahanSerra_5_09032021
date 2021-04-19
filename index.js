main()
async function main() {
    const products = await getProducts()// j'attends que la promesse soit résolu avec await
    //for (product of products) {

    displayProduct(products)

    //}
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
    document.getElementById("grid-product").innerHTML += `
    <div class="product1"><a href="product.html?id=${product[0]._id}">
                    <div class="card"><img src="${product[0].imageUrl}" alt="image_zurss">
                        <div class="card-item">
                            <div class="card-title">${product[0].name}</div>
                            <div class="card-price">${product[0].price}€</div>
                        </div>
                    </div>
                </a></div>
            <div class="product2"><a href="product.html?id=${product[1]._id}">
                <div class="card"><img src="${product[1].imageUrl}" alt="image_hirsch">
                    <div class="card-item">
                        <div class="card-title">${product[1].name}</div>
                        <div class="card-price">${product[1].price}€</div>
                    </div>
                </div>
            </a></div>
            <div class="product3"><a href="product.html?id=${product[2]._id}">
                <div class="card"><img src="${product[2].imageUrl}" alt="image_Franck">
                    <div class="card-item">
                        <div class="card-title">${product[2].name}</div>
                        <div class="card-price">${product[2].price}€</div>
                    </div>
                </div>
            </a></div>
            <div class="product4"><a href="product.html?id=${product[3]._id}">
                <div class="card"><img src="${product[3].imageUrl}" alt="image_kuro">
                    <div class="card-item">
                        <div class="card-title">${product[3].name}</div>
                        <div class="card-price">${product[3].price}€</div>
                    </div>
                </div>
            </a></div>
            <div class="product5"><a href="product.html?id=${product[4]._id}">
                <div class="card"><img src="${product[4].imageUrl}" alt="image_katatone">
                    <div class="card-item">
                        <div class="card-title">${product[4].name}</div>
                        <div class="card-price">${product[4].price}€</div>
                    </div>
                </div>
            </a></div>`
}