"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b**2 - 4 * a * c;
  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let root2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(root1, root2);
  }
  else if (discriminant === 0) 
  {
    let root = -b/(2*a);
    arr.push(root);
  } else {
    return arr;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let mainDebt = amount - contribution;
  let payPerMounth = mainDebt * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let overpayment = payPerMounth  * countMonths;
  overpayment = +((overpayment).toFixed(2));
  return overpayment;
}