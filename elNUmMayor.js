num1 = 2
num2 = 2 

if(num1>num2){
    console.log("num1 es el mayor");
    resta = num1 - num2
    console.log("la resta es :"+ resta);
}else if(num1 == num2){
    console.log("son iguales");
    resta = 0
    console.log("la resta es :"+ resta);
}else{
    console.log("num2 es el mayor");
    resta = num2 - num1
    console.log("la resta es :"+ resta);
}