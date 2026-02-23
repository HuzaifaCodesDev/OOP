let coffee = {
    color: "black",
    drink: function(){
        console.log("gut gut")
    }
}
let IceCoffee = Object.create(coffee);
console.log(IceCoffee.color)
IceCoffee.drink();