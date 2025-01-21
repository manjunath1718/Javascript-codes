const myNums = [1, 2, 3];

// const total = myNums.reduce((acc, currval) => {
//   console.log(`accumelator:${acc} and currentValue:${currval}`);
//   return acc + currval;
// }, 0);
const total = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
