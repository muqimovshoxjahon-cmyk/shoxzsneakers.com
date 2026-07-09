window.onload = function(){

    alert("👋 Welcome to SHOXZ!\n\nFind your perfect sneaker today.");

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
function submitUserInfo() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (username === "" || email === "") {

        alert("Please enter both your name and email.");
        return;

    }

    alert("Thank you, " + username + "! Your information has been submitted.");

    // Optional: Clear the input fields after submission
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";

}
