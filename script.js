var quantity;
var filling;
var additional;
var value;

var cartArray = [];


//create object
function bunItem(filling, quantity){
    this.filling = filling;
    this.quantity = quantity;
}

//submit to cart
function incrementValue() {
    
    if(typeof quantity !== null && typeof filling !== null){

        cartArray.push([bunItem.filling, bunItem.quantity]);
    
        document.getElementById('cartqty').value = cartArray.length;
    
        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        
        console.log(cartArray);
    }

}

function getCart(){
    var cart = JSON.parse(localStorage.getItem("cartArray"));
   console.log(cart);
    console.log(cart.length);
    
    document.getElementById("cartFull").innerHTML = "";
    for(var i = 0; i<cart.length; i++){
        
        var bunType = document.createElement("p");
        var typeText = document.createTextNode=cart[i][0];
        bunType.append("Blackberry");
        
        var item = document.getElementById("cartFull");
        item.append("Blackberry");
        
        
        var fillingHTML = document.createElement("p");
         var fillingText = document.createTextNode=cart[i][0];
        
        fillingHTML.append(fillingText);
        var item = document.createElement("div");
        item.append(fillingHTML);
        

        
        var quantityHTML = document.createElement("p");
            var quantityText= document.createTextNode = cart[i][1];
        quantityHTML.append(quantityText);
        item.append(quantityHTML);
        
        item.setAttribute("class", "cartItem");
        
        var button = document.createElement("input");
        button.setAttribute("type", "submit");
        button.setAttribute("onclick", "removeFromCart(this);");
        button.setAttribute("value", "Remove");
        button.setAttribute("value2", i);
        item.append(button);
        
        var fillCart = document.getElementById("cartFull");
        fillCart.append(item);

    }
    document.getElementById('cartqty').value = cart.length;

function removeFromCart(itemToRemove){
var cart = JSON.parse(localStorage.getItem("cartArray"));
    var removeIndex = itemToRemove.getAttribute("value2");
    cart.splice(removeIndex , 1);
    localStorage.setItem("cartArray", JSON.stringify(cart));
    getCart();
}

function qty1(){
    bunItem.quantity = document.getElementById("opt1").value;

}

function qty2(){
    bunItem.quantity = document.getElementById("opt2").value;
}


function qty3(){
    bunItem.quantity = document.getElementById("opt3").value;
}

function qty4(){
    bunItem.quantity = document.getElementById("opt4").value;
}

function fill1(){
    bunItem.filling = document.getElementById("opt5").value; 
}

function fill2(){
    bunItem.filling = document.getElementById("opt6").value;   
}

function fill3(){
    bunItem.filling = document.getElementById("opt7").value;   
}

function fill4(){
    bunItem.filling = document.getElementById("opt8").value; 
}

function fill5(){
    bunItem.filling = document.getElementById("opt9").value; 
}







var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}