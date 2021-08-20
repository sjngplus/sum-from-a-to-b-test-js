
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  return fromN + sum(fromN + 1, toN);
}

// console.log(sum(1, 5));


module.exports = sum;



