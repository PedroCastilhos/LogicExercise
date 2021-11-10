//2) Analise os algoritmos abaixo e diga o que será impresso na tela ao serem executados:

//a)

let a = 10;
let b = 20;
console.log(b); //20
b = 5;
console.log(a, b); //10, 5

//b)

let a = 30;
let b = 20;
c = a + b;
console.log(c); //50
b = 10;
console.log(b, c); //10, 50
c = a + b;
console.log(a, b, c); //30, 10, 40

//c)

let a = 10;
let b = 20;
let c = a;
b = c;
a = b;
console.log(a, b, c); //10, 10, 10

// d)

let a = 10;
let b = a + 1;
a = b + 1;
b = a + 1;
console.log(a, b); //12, 13

// e)

let a = 10;
let b = 5;
let c = a + b;
b = 20;
a = 10;
console.log(a, b, c); //10, 20, 15

//d)

let a = 10;
let b = a + 1;
a = b + 1;
b = a + 1;
console.log(a); //12
a = b + 1;
console.log(a, b); //14, 13

//e)

let a = 10;
let b = 5;
let c = a + b;
b = 20;
a = 10;
console.log(a, b, c); //10, 20, 15

//f

let x = 1;
let y = 2;
let z = y - x;
console.log(z); //1
x = 5;
y = x + z;
console.log(x, y, z); //5, 6, 1
