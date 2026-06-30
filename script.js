document.getElementById("bookingForm").addEventListener("submit", function(event){

    event.preventDefault();

    alert("🎉 Your table has been reserved successfully!");

    this.reset();

});
// Search Restaurant
function searchRestaurant() {

    let restaurant = document.getElementById("searchInput").value.toLowerCase().trim();

    if (restaurant === "pizza palace" || restaurant === "pizza") {
        window.location.href = "pizza.html";
    }

    else if (restaurant === "burger house" || restaurant === "burger") {
        window.location.href = "burger.html";
    }

    else if (restaurant === "spice garden" || restaurant === "indian") {
        window.location.href = "indian.html";
    }

    else {
        alert("Restaurant not found!");
    }

}