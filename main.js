function sayHello() {
    console.log('Hello, my name is John');
}
sayHello();

function makePizza(topping, crustType){
    console.log('Pizza\'s done. Let\'s eat!'

+ topping + crustType)
}
makePizza(' Extra cheese', " Stuffed crust");

let pizzaDone = function(topping, crustType){
    return 'The ' + crustType + ' crust pizza topped with ' + topping + 
    ' is done.'};
let customPizza = pizzaDone("Ham", "Thin");
console.log(customPizza);