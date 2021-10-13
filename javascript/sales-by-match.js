// shorturl.at/ftEGV

function sockMerchant(n, arr) {
  // stores the given array elements
  let set = new Set();

  // counter increases when the same element (a pair of socks/same color) is found, then it is deleted
  let counter = 0;

  // loop the given array
  for (let i = 0; i < n; i++) {
    // stores the current element
    let element = arr[i];

    // delete the element if it is already in the set, meaning a pair(color) was found, then increase counter
    if (set.has(element)) {
      set.delete(element);
      counter++;

      // if the element was not found it it added to set
    } else {
      set.add(element);
    }
  }
  return counter;
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);