// SHOXZ SHOP SYSTEM

document.addEventListener("DOMContentLoaded", function(){


    const products = document.querySelectorAll(".product-card");

    const filterButtons = document.querySelectorAll(".brand-filter button");

    const searchInput = document.getElementById("searchInput");



    // FILTER SYSTEM

    filterButtons.forEach(button => {


        button.addEventListener("click", function(){


            const filter = this.dataset.filter;


            products.forEach(product => {


                const category = product.dataset.category;


                if(filter === "all" || category === filter){

                    product.style.display = "block";

                }

                else{

                    product.style.display = "none";

                }


            });


        });


    });



    // SEARCH SYSTEM

    searchInput.addEventListener("input", function(){


        const searchValue = this.value.toLowerCase();



        products.forEach(product => {


            const productName = product
                .querySelector("h3")
                .textContent
                .toLowerCase();



            if(productName.includes(searchValue)){


                product.style.display = "block";


            }

            else{


                product.style.display = "none";


            }


        });


    });



}); 
