var quantity;
var filling;
var additional;


//submit to cart
function incrementValue() {
<<<<<<< HEAD
    
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
=======
    "use strict";
    var value = parseInt(document.getElementById('cartqty').value, 10); 
    value++; //adding for each click
    document.getElementById('cartqty').value = value;
}
>>>>>>> parent of be16b4b... HW 6B


function qty1(){
    quantity = document.getElementById("opt1").value;

}

function qty2(){
    quantity = document.getElementById("opt2").value;
}


function qty3(){
    quantity = document.getElementById("opt3").value;
}


function qty4(){
    quantity = document.getElementById("opt4").value;
}

function fill1(){
    filling = document.getElementById("opt5").value; 
}

function fill2(){
    filling = document.getElementById("opt6").value;   
}

function fill3(){
    filling = document.getElementById("opt7").value;   
}

function fill4(){
    filling = document.getElementById("opt8").value; 
}

function fill5(){
    filling = document.getElementById("opt9").value; 
}

function validate(){
    if(quantity != null & filling != null){
        console.log(quantity +" "+ filling);
    } 
    else{
        console.log("don't add");
    }
}