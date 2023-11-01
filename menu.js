let all_add_cart = document.querySelectorAll(".add-cart");
let all_card = document.querySelectorAll(".card");
let cart_space = document.querySelector(".add-cart-body-1");
let cart_main_space = document.querySelector(".birthday-cards")
let all_add_cart_buttons = document.querySelectorAll(".add-cart");
for(i=0; i<all_add_cart.length; i++){
    all_add_cart[i].addEventListener("click", allAddCart);
}
let number_of_cart = document.querySelector(".number-of-carts");
let cart = document.querySelectorAll(".cart");
number_of_cart.innerHTML = 0;
function allAddCart(){    
    for(i=0; i<cart.length; i++){
        cart[i].style.display = "flex";
    }
    alert("one item added to cart");
    number_of_cart.innerHTML++;
}
let copy_all_cards = [];
for(i=0; i<all_card.length; i++){
    copy_all_cards.push(all_card[i]);
}
// var today = new Date();
// var time = today.getHours() + ":" + today;
let all_price = document.querySelectorAll(".price p");
let copy_all_prices = [];
for(i=0; i<all_price.length; i++){
    copy_all_prices.push(all_price[i]);
    copy_all_prices[i].innerHTML = "$$" + Math.floor(Math.random() * (500 - 90) + 90) + ".00";
    // copy_all_prices[i].innerHTML = today;
}
