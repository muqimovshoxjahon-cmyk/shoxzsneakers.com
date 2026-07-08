window.onload = function(){

    if(!sessionStorage.getItem("welcomeShown")){

        alert("Welcome to SHOXZ! Find your perfect sneaker today.");

        sessionStorage.setItem("welcomeShown", "true");

    }

};
function recommendSneaker(){


    let style = document.getElementById("styleChoice").value;


    let result = document.getElementById("recommendationResult");



    if(style === "streetwear"){

        result.textContent = "Recommended: Nike Dunk Low 👟";

    }


    else if(style === "sport"){

        result.textContent = "Recommended: ASICS GEL-1130 👟";

    }


    else if(style === "classic"){

        result.textContent = "Recommended: Adidas Samba OG 👟";

    }


}