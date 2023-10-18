const array = [
  { name: 'Celular LG', price: 800, quantity: 5 },
  { name: 'PC com Windows', price: 2000, quantity: 3 },
  { name: 'iPhone', price: 5000, quantity: 2 },
];


// Filter
const filter = array.filter((product) => product.price > 1000);

// Map
const map = array.map((product) => {
  return {
    ...product,
    subtotal: product.price * product.quantity,
  }
});

// Reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0)

console.log({ reduce });

const numbers = [10, 20, 30, 40];

console.log(numbers.map(n => n*2));