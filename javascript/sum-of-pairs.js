// https://www.codewars.com/kata/54d81488b981293527000c8f/javascript

function sumPairs(arr, total) {
  // map stores the keys/values of the array
  let numIndex = new Map();

  // here will be stored the final result
  let result = [];

  // loop the given array
  for (let i = 0; i < arr.length; i++) {
    // the current element of the loop
    let num = arr[i];

    // the remaining element to be found to satisfy the total given number;
    // (1) Eg. 2 + b = 7 (total) => b = 7 - 2 = 5
    let dif = total - num;

    // check if the wanted element is already in the map;
    // (2) assume that 2 is already in map, 5 is found so it satistfies the total of 7
    if (numIndex.has(dif)) {
      result[0] = arr[numIndex.get(dif)];
      result[1] = num;

      // return the array with the values that form the total
      return result;

      // key = value of arr[x], value = x, so we can use the <get> method from Map
    } else {
      numIndex.set(num, i);
    }
  }
}
