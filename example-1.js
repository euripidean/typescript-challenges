// Run the code here, no problems?

function getPriceWithTax(amount, rate) {
  const price = amount.toFixed(2);
  const tax = price * rate;
  return price + tax;
}

const answer = getPriceWithTax(23.99, 9.5);
console.log(answer);

// Run the code here and look at the results
// Does it look right?
// What went wrong?

// Price is a string, not a number so the tax calculation is wrong. Also, if the rate of tax is a %, the math is doubly wrong.
// The function is returning a string, and trying to perform a calculation on it.
