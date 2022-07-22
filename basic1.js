console.log("heloo world");
let a = 6;
console.log(typeof a);

let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers = marks.length;
console.log(numbers);

sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}

console.log(sum);
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);
console.log("@@@@@@@@@@@@@@@@");



var scores = [12, 13, 14, 15, 16];
var evenScores =[]; 

for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);    
  }
}
console.log(evenScores);
let evenScores1 = scores.filter(score=>score%2== 0);
console.log(evenScores1);

//map
//multiple evenScores by 2 ans create new array
let evenScoresByTree = evenScores1.map(score=>score*3);
console.log(evenScoresByTree);
let sumo = evenScoresByTree.reduce((sum,val)=>sum+val, 0);
console.log(sumo);


let fruits = ["banana", "orange", "kiwi", "cumcum"];
fruits.sort();
fruits.reverse();

console.log(fruits);
var cifry = [1,23,45,2,5,61,21,16]!!

console.log(cifry.sort((a,b) => a-b)) //b-a if reverse 
console.log(cifry.sort((a,b) => a-b))






