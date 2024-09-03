function increaseBalance(x, y) {
  x += y;
  return x;
}


function decreaseBalance(x, y) {
x -= y;
return x;
}


function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}


function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}


function getIncrementPost(x) {
  return x++;
}


function getIncrementPre(x) {
  return ++x;
}


function getDecrementPost(x) {
  return x--;
}


function getDecrementPre(x) {
  return --x;
}


console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(getIncrementPost(7));
console.log(getIncrementPre(6));
console.log(getDecrementPost(5));
console.log(getDecrementPre(1));