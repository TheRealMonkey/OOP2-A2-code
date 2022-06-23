

class Pizza {
  constructor(type, sides, size, extraToppings) {
    self.type = type;
    self.sides = sides;
    self.size = size;
    self.extraToppings = extraToppings;

  }
  returnPizza() {
    return { type, sides, size, extraToppings };
  }
}

document.querySelector("#submit").addEventListener("click", () => {
  typeOfPizza = document.querySelector(
    'input[name="type_of_pizza"]:checked'
  ).value;


  sides = [...document.querySelectorAll('input[name="sides"]:checked')].map(x=>x.value);


  sizeOfPizza = document.querySelector(
    'input[name="size_of_pizza"]:checked'
  ).value;



  extraToppings = [...document.querySelectorAll('input[name="extra_topping"]:checked')].map(x=>x.value);


 

  
  customPizza = new Pizza(typeOfPizza, sides, sizeOfPizza, extraToppings).returnPizza()
  document.querySelector(".main").innerHTML=`
  <h1>Pizza that has been ordered:</h1>
  <h2>Type of Pizza</h2>
  <h3>${customPizza.type}</h3>
  <h2>Sides</h2>
  <h3>${customPizza.sides}</h3>
  <h2>Size of Pizza</h2>
  <h3>${customPizza.size}</h3>
  <h2>Extra Toppings</h2>
  <h3>${customPizza.extraToppings}</h3>`
});
