// Get the modal
var modal = document.getElementById('modal-purchase');

// Get the button that opens the modal
var btn = document.getElementById("button-purchase");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modalProduct = document.getElementById('modal-product');
var imgProduct = document.getElementById("img-product");
var imgShow = document.getElementById("img-show");
var captionProduct = document.getElementById("caption-product");
var closeProduct = document.getElementsByClassName("close-product")[0];
imgProduct.onclick = function() {
    modalProduct.style.display = "block";
    imgShow.src = this.src;
    captionProduct.innerHTML =this.alt;
}
closeProduct.onclick = function() {
    modalProduct.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modalProduct.style.display = "none";
    }
}