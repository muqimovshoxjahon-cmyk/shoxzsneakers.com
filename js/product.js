let currentProduct;

const products = {

    airmax: {

        name: "Nike Air Max 90",

        brand: "Nike",

        image: "./images/nike-airmax1.jpg",

        price: "¥18,900",

        rating: "★★★★★",

        description:
        "The Nike Air Max 90 combines classic design with modern comfort. A perfect sneaker for everyday lifestyle, street fashion, and daily wear."

    },


    airforce: {

        name: "Nike Air Force 1",

        brand: "Nike",

        image: "./images/nike-airforce.jpg",

        price: "¥16,500",

        rating: "★★★★★",

        description:
        "The iconic Nike Air Force 1 delivers timeless style with excellent comfort. A must-have sneaker for every collection."

    },


    dunk: {

        name: "Nike Dunk Low",

        brand: "Nike",

        image: "./images/nike-dunk.jpg",

        price: "¥14,800",

        rating: "★★★★☆",

        description:
        "Nike Dunk Low brings classic basketball inspiration with a modern streetwear design."

    },


    campus: {

        name: "Adidas Campus 00s",

        brand: "Adidas",

        image: "./images/adidas-campus.jpg",

        price: "¥15,900",

        rating: "★★★★☆",

        description:
        "Adidas Campus 00s combines retro skate style with modern street fashion."

    },


    samba: {

        name: "Adidas Samba OG",

        brand: "Adidas",

        image: "./images/adidas-samba.jpg",

        price: "¥17,600",

        rating: "★★★★★",

        description:
        "A legendary Adidas silhouette inspired by football heritage and loved worldwide for its classic style."

    },


    gazelle: {

        name: "Adidas Gazelle",

        brand: "Adidas",

        image: "./images/adidas-gazelle.jpg",

        price: "¥14,500",

        rating: "★★★★☆",

        description:
        "The Adidas Gazelle offers a simple retro design with comfortable everyday performance."

    },


    nb9060: {

        name: "New Balance 9060",

        brand: "New Balance",

        image: "./images/newbalance90601.jpg",

        price: "¥22,500",

        rating: "★★★★★",

        description:
        "The New Balance 9060 combines futuristic design with premium comfort and advanced cushioning."

    },


    nb530: {

        name: "New Balance 530",

        brand: "New Balance",

        image: "./images/newbalance530.jpg",

        price: "¥12,900",

        rating: "★★★★☆",

        description:
        "The New Balance 530 is a classic lifestyle sneaker known for comfort and everyday versatility."

    },


    pumasuede: {

        name: "Puma Suede Classic",

        brand: "Puma",

        image: "./images/puma-suede.jpg",

        price: "¥11,800",

        rating: "★★★★☆",

        description:
        "The Puma Suede Classic is an iconic sneaker with timeless design and premium suede materials."

    },


    palermo: {

        name: "Puma Palermo",

        brand: "Puma",

        image: "./images/puma-palermo.jpg",

        price: "¥13,800",

        rating: "★★★★★",

        description:
        "Puma Palermo brings a vintage terrace-inspired look with modern streetwear appeal."

    },


    kayano: {

        name: "ASICS Gel-Kayano 14",

        brand: "ASICS",

        image: "./images/asics-kayano.jpg",

        price: "¥19,800",

        rating: "★★★★★",

        description:
        "ASICS Gel-Kayano 14 combines performance running technology with fashionable lifestyle design."

    },


    gel1130: {

        name: "ASICS GEL-1130",

        brand: "ASICS",

        image: "./images/asics-1130.jpg",

        price: "¥14,300",

        rating: "★★★★☆",

        description:
        "The ASICS GEL-1130 offers comfortable cushioning with a classic early-2000s running style."

    }

};

document.addEventListener("DOMContentLoaded", function(){


    const params = new URLSearchParams(window.location.search);


    const productID = params.get("id");


    currentProduct = products[productID];


if(currentProduct){


    document.getElementById("productImage").src = currentProduct.image;


    document.getElementById("productImage").alt = currentProduct.name;


    document.getElementById("productName").textContent = currentProduct.name;


    document.getElementById("productRating").textContent = currentProduct.rating;


    document.getElementById("productPrice").textContent = currentProduct.price;


    document.getElementById("productDescription").textContent = currentProduct.description;


}
else {


    console.log("Product not found");


}


});
// SIZE SELECTION

const sizeButtons = document.querySelectorAll(".sizes button");

let selectedSize = null;

sizeButtons.forEach(button => {

    button.addEventListener("click", function(){

        sizeButtons.forEach(btn => {

            btn.style.background = "white";
            btn.style.color = "#111";
            btn.classList.remove("selected");

        });


        this.style.background = "#E63946";
        this.style.color = "white";

        this.classList.add("selected");

        selectedSize = this.textContent;

    });

}); 
// QUANTITY SYSTEM

let quantity = 1;


const quantityDisplay = document.getElementById("quantity");

const plusButton = document.getElementById("plus");

const minusButton = document.getElementById("minus");



plusButton.addEventListener("click", function(){


    quantity++;

    quantityDisplay.textContent = quantity;


});



minusButton.addEventListener("click", function(){


    if(quantity > 1){

        quantity--;

    }


    quantityDisplay.textContent = quantity;


});
// ADD TO CART SYSTEM

const cartButton = document.querySelector(".cart-btn");


if(cartButton){


    cartButton.addEventListener("click", function(){


        const selectedSizeButton = document.querySelector(".sizes button.selected"); 


       if(!selectedSizeButton){

        alert("Please select a size first.");

        return;

        }


        let cart = JSON.parse(localStorage.getItem("cart")) || [];


        const item = {

            name: currentProduct.name,

            price: currentProduct.price,

            image: currentProduct.image,

            size: selectedSizeButton.textContent,

            quantity: quantity

        };

        cart.push(item);


        localStorage.setItem("cart", JSON.stringify(cart));


        alert(currentProduct.name + " added to cart!");


    });


}