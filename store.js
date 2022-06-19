var removeCartItemButtons = document.getElementsByClassName("btn-area");
console.log(removeCartItemButtons);

for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    console.log("clicked");
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

document.getElementById("input").addEventListener("change", updateCartTotal)


function updateCartTotal(e) {
  var price = document.getElementsByClassName("price")[0].innerHTML
  var quantity = e.target.value
  var total = price * quantity
}
document.getElementsByClassName('Subtotal')[0].innerHTML=total

