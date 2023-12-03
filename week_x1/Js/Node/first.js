
function hello( name ){
    console.log("Hello " + name);
}

//hello("Rishav");
//console.log(window); --> window does not exsist

setInterval(function(){ 
    for(i = 0; i < 10; ++i){
    hello("Rishav" + i);
    }
}, 1000);