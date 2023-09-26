// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name1){
    cats.push(name1);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
   const newcats =[...cats,name];
   return newcats
}
function prependCat(name){
    const newcats2 =[name,...cats];
    return newcats2
}
function removeLastCat(){
    const newcats = cats.slice(0,cats.length - 1)
    return newcats
}
function removeFirstCat(){
    const newcats = cats.slice(1)
    return newcats
}