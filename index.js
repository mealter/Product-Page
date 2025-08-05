let products = [];
const gridCon = document.querySelector(".product-list");
const drpDown = document.querySelector("#category");
// GET DATA FROM API
fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
            .then(data => {
                allProducts = data;
                console.table(allProducts);
                displayAllProducts(allProducts);
            });
// DISPLAY ALL PRODUCTS
function displayAllProducts(dataArray){
    gridCon.innerHTML = ""; //setting it to empty
    dataArray.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" >
            <h2>${item.title}</h2>
            <h1>${item.price}</h1>
        `
        card.addEventListener("click", ()=>{
            openPopup(item);
        });
        gridCon.appendChild(card);
    });
}
// SORT ALL PRODUCTS
drpDown.addEventListener("change", (e)=>{
    const value= e.target.value;
    if (value == "all"){
        displayAllProducts(allProducts);
    }else{
        const filtered = allProducts.filter(item => item.category == value);
        displayAllProducts(filtered);
        
    }
});


// POPUP function
function openPopup(item){
    document.getElementById("popup-img").src = item.image;
    document.getElementById("popup-title").textContent = item.title;
    document.getElementById("popup-description").textContent = item.description;
    document.getElementById("popup-price").textContent = item.price;
    document.getElementById("popup-category").textContent = item.category;
    document.getElementById("popup").style.display = "flex";
}
// close popup
document.getElementById("close").addEventListener("click", ()=>{
    document.getElementById("popup").style.display = "none";
});