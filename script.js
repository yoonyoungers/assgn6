var quantity;
var filling;
var additional;


//submit to cart
function incrementValue() {
    "use strict";
    var value = parseInt(document.getElementById('cartqty').value, 10); 
    value++; //adding for each click
    document.getElementById('cartqty').value = value;
}


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