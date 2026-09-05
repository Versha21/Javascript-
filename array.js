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
console.log("Updated prices are: " + prices);
