
function distinct(a){
// empty array to hold answer
let newArray = [];
// iterate through the array
for(let i=0; i < a.length; i++){
// indexOf returns -1 if the element can't be found in the array
if(newArray.indexOf(a[i]) === -1){
// if it is not found push the current element into the new array
  newArray.push(a[i]);
}
// return loop
}

return newArray
}








// One Line Solution 

function distinct(a) {
// Set only stores unique values (by default)
// using the spread operator, I can to wrap the Set in brackets to return an array
  return [...new Set(a)];
}
