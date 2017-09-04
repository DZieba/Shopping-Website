
/* ----------------------------------------------- */
/*  ADDING ITEMS TO CART */
/* -----------------------------------------------*/


var currentValue = 0;
var currentQuantity = 0;
var basket = document.getElementById('cart');

function deleteFromCart() {
    var confirmation = confirm('Jesteś pewien że chcesz usunąć ten element z koszyka?');
    if (confirmation == true) {
        var amountToDelete = parseInt(this.parentElement.parentElement.children[0].innerHTML);
        currentValue -= amountToDelete;
        currentQuantity -= 1;
        basket.innerHTML = currentValue + 'zł/prod.(' + currentQuantity + ')';
        while (this.parentNode != null) {
            this.parentNode.removeChild(this.parentNode.childNodes[0]);
        }

    }
}


/* ----------------------------------------------- */
/*  DELETING ITEMS FROM CART */
/* -----------------------------------------------*/


function addToCart(clickedItem) {

    var parent = clickedItem.parentElement;
    var itemValue = parseInt(parent.children[0].innerHTML);
    currentValue += itemValue;
    currentQuantity += 1;
    basket.innerHTML = currentValue + 'zł/prod.(' + currentQuantity + ')';
    var newEl = document.createElement("p");
    var newText = document.createTextNode("Dodano do koszyka");
    var newI = document.createElement("i");
    newI.className = "fa fa-times";
    newI.onclick = deleteFromCart;
    newEl.appendChild(newText);
    newEl.style.color = '#11a81f';
    newEl.appendChild(newI);
    parent.appendChild(newEl);
}


/* ----------------------------------------------- */
/*  CREATING A MODAL */
/* -----------------------------------------------*/

var modal = document.getElementById('itemModal');
var img = document.getElementsByClassName('img_for_modal');
var modalImg = document.getElementById("selectedImage");
var caption = document.getElementById('caption');

for (var i = 0; i < img.length; i++) {

    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        caption.innerHTML = this.parentElement.innerText;

    }
}

var cross = document.getElementById('cross');
cross.onclick = function () {
    modal.style.display = "none";
}





