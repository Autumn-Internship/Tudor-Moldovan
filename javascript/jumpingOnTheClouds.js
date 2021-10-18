// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function jumpOnClouds(c) {
  // cannot start with a thunderhead cloud
  if (c[0] === 1) {
    return 0;
  }
  let jumps = 0;
  let index = 0;

  // the array must have min. 2 elements
  while (index < c.length - 2) {
    // if the next element is one, it means we should avoid it so we increase the index with two
    if (c[index + 1] === 1) {
      index += 2;
    // if the next element is 0, increease index with one
    } else {
      index += 1;
    }
    // on each iteration we also counter jumps.
    jumps++;
  }
  return jumps;
}
