// arrow function, tai fat arrow function
() => {};

// function() {

// }

const lista = [1, 2, 3, 4];

// lista.map(() => {});
// lista.map(function () {});

// const iteroi = function () {};
// lista.map(iteroi);

// function iteroi2() {}
// lista.map(iteroi2);

const summa = (a, b) => a + b;

function summaFn(a, b) {
  return a + b;
}

const jokin = (num) => summa(num ** 2);

// ei palauta
const summa2 = (a, b) => {
  a + b;
};

const summa3 = (a, b) => {
  const muuttuja = a + b;

  console.log("muuttuja", muuttuja);
  return muuttuja;
};
