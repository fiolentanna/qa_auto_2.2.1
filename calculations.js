function increaseBalance(x, y) {
  x += y;
  return x;
}
console.log(increaseBalance(3000, 700));

function decreaseBalance(x, y) {
x -= y;
return x;
}
console.log(decreaseBalance(3000, 700));

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}
console.log(divideBalanceByAccounts(3000, 2));

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}
console.log(getRestAfterDivision(7000, 3));
