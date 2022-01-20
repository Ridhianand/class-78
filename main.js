var fruit=["Guava","Mango", "Pineapple"];
console.log(fruit);
document.getElementById("my_fruits").innerHTML=fruit;
var array_lenght=fruit.length;
console.log(array_lenght);
document.getElementById("length").innerHTML=array_lenght;
fruit.push("Raspberry");
console.log(fruit);
document.getElementById("newfruit").innerHTML=fruit;
var array_value="";
for(i=0;i<fruit.length;i++){
    console.log(fruit[i]);
    array_value=array_value+fruit[i]+"<br>";
}
document.getElementById("loop").innerHTML=array_value;