// SUNDAY TRAINING
// JS | Arrays - Map, Reduce, Filter.

// Exercise about .map
// Given an array of cities, return an array with the first letter of each 
//city’s name capitalized. You can use ES5 or ES6 syntax, whichever you feel 
// more comfortable with at this point.

var cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", 
"sao paulo", "lisbon", "mexico city", "paris"];

const citiesFirstUpperCase = cities.map(city => city.charAt(0).toUpperCase() + city.slice(1))

console.log(citiesFirstUpperCase)

// Exercise about .reduce
// Given a menu of foods and their calories, calculate the average 
// number of calories for the entire list. Starter code:
/*Remember:
array.reduce((accumulator, currentValue) => accumulator + currentValue)
*/

const menu = [
    { name: "Carrots", calories: 150 },
    { name: "Steak", calories: 350 },
    { name: "Broccoli", calories: 120 },
    { name: "Chicken", calories: 250 },
    { name: "Pizza", calories: 520 }
  ];
  
  let averageCalories = menu.reduce(function(sum, cal) {
    let calTotal = cal.calories
    return (sum + calTotal)
  },0)
  let average =  averageCalories/ menu.length
  
  console.log(average);

  // Another example with .reduce
  // We need the average rate so that other customers 
  // can see in a fast way every product rate.

  const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacturer: "Amazon",
    reviews:
    [
      {  user: "Pavel Nedved",
        comments: "It was really useful, strongly recommended",
        rate: 4
      },
      {  user: "Alvaro Trezeguet",
        comments: "It lasted 2 days",
        rate: 1
      },
      {  user: "David Recoba",
        comments: "Awesome",
        rate: 5
      },
      {  user: "Jose Romero",
        comments: "Good value for money",
        rate: 4
      },
      {  user: "Antonio Cano",
        comments: "It broked really fast",
        rate: 2
      },
    ]
  }
  
  const totalReviews = product.reviews.reduce(function (acc, review) {
    return acc + review.rate;
  }, 0)
  const averageRate = totalReviews/product.reviews.length
  
  console.log(`averageRate rate: ${averageRate}`)

// Exercise about .filter
// Given the following array, filter the ones who are eligible to go to bars in the USA.

var people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 20 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 },
    { name: "Bill", age: 19 }
  ];
  
  let ofDrinkingAge = people.filter(function(person){
    if (person.age >= 21) return person
  })
  
  console.log(ofDrinkingAge);

// Another exercise about .filter
// Filter only places with pool: true

const places = [
    {
     title: "Awesome Suite 20' away from la Rambla",
     price: 200,
     type: "Private Room",
     pool: true,
     garage: false
    },
    {
     title: "Private apartment",
     price: 190,
     type: "Entire Place",
     pool: true,
     garage: true
    },
    {
     title: "Apartment with awesome views",
     price: 400,
     type: "Entire Place",
     pool: false,
     garage: false
    },
    {
     title: "Apartment in la Rambla",
     price: 150,
     type: "Private Room",
     pool: false,
     garage: true
    },
    {
     title: "Comfortable place in Barcelona´s center",
     price: 390,
     type: "Entire place",
     pool: true,
     garage: true
    },
    {
     title: "Room near Sagrada Familia",
     price: 170,
     type: "Private Room",
     pool: false,
     garage: false
    },
    {
     title: "Great house next to Camp Nou",
     price: 140,
     type: "Entire place",
     pool: true,
     garage: true
    },
    {
     title: "New apartment with 2 beds",
     price: 2000,
     type: "Entire place",
     pool: false,
     garage: true
    },
    {
     title: "Awesome Suite",
     price: 230,
     type: "Private Room",
     pool: false,
     garage: false
    },
    {
     title: "Apartment 10' from la Rambla",
     price: 930,
     type: "Entire place",
     pool: true,
     garage: true
    }
   ]
   
   let poolFilter = places.filter(function(place) {
     if (place.pool === true) return place
   })
   
   console.log(poolFilter)