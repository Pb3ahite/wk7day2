
1. 
function FavoriteFood(person) {
    //person, not literal, but = to pizza, tacos, ice_cream...
    for (let key in person) {
      if (Array.isArray(person[key])) {
        // is this an array or not? Is.
        console.log(`${key}: ${person[key].toString()}`);
        //print plain text using backticks & $ with {}
      } else if (typeof person[key] === "object") {
        console.log(`${key}:`);
        //is the data exactly equal?
        for (let nestedKey in person[key][0]) {
          console.log(`  ${nestedKey}: ${person[key][0][nestedKey]}`);
          //for loop iterated through keys with 0 index for the first element
          //nested (key within a key)
        }
      } else {
        console.log(`${key}: ${person[key]}`);
        // if none of the previous things apply, else...  key is a placeholder
      }
    }
  }
  
  let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [
      {
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt",
      },
    ],
  };
  
  FavoriteFood(person3);


  

  2. 
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
    
   
    this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  
    
    this.incrementAge = () => {
      this.age++;
    };
  }

  const person1 = new Person("Jethro", 15)
  const person2 = new Person("Ben", 19)

  person1.printInfo();
  person2.printInfo();

  person1.incrementAge();
  person1.incrementAge();
  person1.incrementAge();

  person1.printInfo();
  person2.printInfo();





  3. 
  async function StringLength(string) {
    if (string.length > 10) {
      return "Big word";
    } else {
      return "Small word"; } }
  
  
  (async () => {
    try {
      const result1 = await StringLength("Kumbaya My Brother!");
      console.log(result1); 
  
      const result2 = await StringLength("Shalom!");
      console.log(result2); 
    } catch (error) {
      console.log(error); 
    }
  })();
  