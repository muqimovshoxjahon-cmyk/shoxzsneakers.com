document.addEventListener("DOMContentLoaded", function(){


    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");


    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    if(cart.length === 0){

        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        totalPrice.textContent = "¥0";
        return;

    }



    let total = 0;



    cart.forEach((item, index) => {


        let priceNumber = Number(
            item.price.replace("¥","").replace(",","")
        );


        total += priceNumber * item.quantity;



        const productBox = document.createElement("div");


        productBox.classList.add("cart-item");



        productBox.innerHTML = `

            <img src="${item.image}" alt="${item.name}">


            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>Size: ${item.size}</p>

                <p>Price: ${item.price}</p>

                <div class="cart-quantity">

                <button class="minus-btn" data-index="${index}">
                 -
                </button>

                <span>${item.quantity}</span>

                <button class="plus-btn" data-index="${index}">
                   +
                </button>

                </div>

                <button class="remove-btn" data-index="${index}">
                    Remove
                </button>

            </div>

        `;



        cartItems.appendChild(productBox);



    });



    totalPrice.textContent = "¥" + total.toLocaleString();



    const removeButtons = document.querySelectorAll(".remove-btn");


    removeButtons.forEach(button => {


        button.addEventListener("click", function(){


            const index = this.dataset.index;


            cart.splice(index, 1);


            localStorage.setItem("cart", JSON.stringify(cart));


            location.reload();


        });


    });

// PLUS BUTTONS

const plusButtons = document.querySelectorAll(".plus-btn");


plusButtons.forEach(button => {

    button.addEventListener("click", function(){

        const index = this.dataset.index;


        cart[index].quantity++;


        localStorage.setItem("cart", JSON.stringify(cart));


        location.reload();

    });

});



// MINUS BUTTONS

const minusButtons = document.querySelectorAll(".minus-btn");


minusButtons.forEach(button => {

    button.addEventListener("click", function(){

        const index = this.dataset.index;


        if(cart[index].quantity > 1){

            cart[index].quantity--;

        }


        localStorage.setItem("cart", JSON.stringify(cart));


        location.reload();

    });

});

});
