//  <div class="card">
//             <p class="name">Lapte</p>
//             <img src="/08_js_basics/08_show_products/lapte.jpg" alt="Product Image">
//             <p class="price">10lei</p>
//         </div>
//          <div class="card">
//             <p class="name">Mere</p>
//             <img src="/08_js_basics/08_show_products/mere.jpg" alt="Product Image">
//             <p class="price">17lei</p>
//         </div>
//          <div class="card">
//             <p class="name">Rosii</p>
//             <img src="/08_js_basics/08_show_products/rosii.jpg" alt="Product Image">
//             <p class="price">5lei</p>
//         </div>
//         <div class="card">
//             <p class="name">Paste</p>
//             <img src="/08_js_basics/08_show_products/paste.jpg" alt="Product Image">
//             <p class="price">8lei</p>
//         </div>
//         <div class="card">
//             <p class="name">Cola</p>
//             <img src="/08_js_basics/08_show_products/cocacola.jpg" alt="Product Image">
//             <p class="price">6lei</p>
//         </div>

var products = [
    {
        name: "Lapte",
        image: "/08_js_basics/08_show_products/lapte.jpg",
        price: 10
    },
    {   name: "Mere",
        image: "/08_js_basics/08_show_products/mere.jpg",
        price: 17
    },
    {   name: "Rosii",
        image: "/08_js_basics/08_show_products/rosii.jpg",
        price: 5
    },
    {   name: "Paste",
        image: "/08_js_basics/08_show_products/paste.jpg",
        price: 8
    },
    {   name: "Cola",
        image: "/08_js_basics/08_show_products/cocacola.jpg",
        price: 6
    }
];
function createProductCard(product) {
    return `
    <div class="card">
            <p class="name">${product.name}</p>
            <img src="${product.imageURL}" alt="Product Image">
            <p class="price">${product.price}lei</p>  
        </div>
    `;
}
    
    
for (var i = 0; i < products.length-1; i++) {
    var container = document.getElementById("container");

    container.innerHTML += createProductCard(products[i]);}