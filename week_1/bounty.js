
let sum = 0;
for(var i = 0; i < 100000000000; ++i){
    sum += sum + i;
}

console.log(sum);

