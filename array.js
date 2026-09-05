//create array
let heroes = ["Ironman", "Thor", "Hulk", "Captain America"];
let v= [90, 80, 70, 60, 50];
let info = ["John", 25, "USA", true];
console .log(heroes);
console.log(v);
console.log(info);

//for loop
for (let idx = 0 ; idx < heroes.length; idx++) {
    console.log(heroes[idx]);
}

//for-of lopp
for (let hero of heroes) {
    console.log(hero);
}
for (let hero of heroes) {
    console.log(hero.toUpperCase());
}

//practice question 1
let nums = [85,97,37,76,60];
let h = 0;
// for(let val of nums) {
//     h += val;
// }
for (let i = 0; i < nums.length; i++) {
   h += nums[i];
}
let avg = h / nums.length;
console.log("Average of all numbers in the array is: " + avg);

//practice question 2
let prices = [250,645,300,900,50];
let offer = 0;
for (let i = 0; i < prices.length; i++) {
    offer = prices[i]/ 10;
    prices[i] = prices[i] - offer;
}
console.log( prices);

//ARRAY METHODS
//1. push() - add element at the end of the array
let veggies = ["Potato", "Tomato", "Onion"];
veggies.push("Carrot");
console.log(veggies);

//pop() - remove last element from the array
veggies.pop();
console.log(veggies);

//toString() - convert array to string
console.log(veggies.toString());

//concat() - merge two arrays
let heroes1 = heroes.concat(v);
console.log(heroes1);

//unshift() - add element at the beginning of the array
veggies.unshift("Cabbage");
console.log(veggies);

let veg = veggies.shift();
console.log(veg);

//slice() - extract a part of the array but dont change in original array
let slicedVeggies = veggies.slice(1, 4);
console.log(slicedVeggies);

//splice() - remove or replace elements in the array
veggies.splice(1, 2 , "Broccoli"); // removes 2 elements starting from index 1 and adds "Broccoli"
console.log(veggies);


//practice question 3
let company = ["bloomberg", "Microsoft","uber","Google" ,"IBM", "Netflix"];
console.log(company);
company.splice(0, 1 );
company.splice(1, 1, "OLA");
company.splice(7, 0, "Amazon");
