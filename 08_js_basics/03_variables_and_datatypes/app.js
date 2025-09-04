// var, let, const
var a;
var b = 10;

console.log(a); // undefined
console.log(b); // 10
a = 20;
console.log(a); // 20

console.log(a,b); // 20 10
console.log('a =', a); // a = 20
console.log('b =', b); // b = 10

console.log(c); // ReferenceError: c is not defined
console.log('c')
var c = 30;
console.log(c); // 30

// caractere permse - a-z, A-Z, 0-9, _, $
// camelCase
var userName = "John";
var numberOfLikes;
var password;
var user1;
var user2;
var emailAddress;

// nume invalide:
// var 1nume; // nu poate incepe cu cifra
// var nume-utilizator; // nu poate contine -
// var function; // cuvant rezervat
// var if; // cuvant rezervat

// siruri de caractere:
var nume = "Maria";
var prenume = 'Popescu';
var mesaj = "Salut, 'ce mai faci'?";
var varsta = 30 + a; // 30 + 20 = 50
var text1 = 'Ma numesc ' + nume + ' si am ' + varsta + ' ani.';
console.log(text1); // Ma numesc Maria si am 30 ani.
console.log("Ma numesc ", nume, "si am", varsta, "ani."); // Ma numesc Maria si am 30 ani.

var text2 = 20 + '20'; // '2020'
console.log(Number(text2) + 10); // 2030

var intreg = 30;
var zecimal = 3.14;
var notatieExponentiala = 2e3; // 2 * 10^3 = 2000
console.log(intreg, zecimal, notatieExponentiala); // 30 3.14 2000
var hexaNumber = 0xFF; // 255
console.log(hexaNumber); // 255
var binaryNumber = 0b1010; // 10
console.log(binaryNumber); // 10

// valori speciale:
var infinit = Infinity;
console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
var notANumber = NaN;
var n ='10';
var n= 'F';
console.log(Number(n)); // NaN

console.log(isNaN(10)); // false

// boolean
var esteCeata = true;
var amBani = false;
var comparatie= 2<3; // true
console.log(esteCeata, amBani, comparatie); // true

// Operatori
// Aritmetici: +, -, *, /, %
console.log(2-8);
var x = 5;
var y = 2;
console.log(x+y); // 7
console.log(x-y); // 3
console.log(x*y); // 10
console.log(x/y); // 2.5
console.log(x%y); // 1
var esteImpar = (x%2) === 0; // false
console.log(esteImpar); // false

x = x + 3; // 8
console.log(x); // 8

// incrementare/decrementare
x++; // x = x + 1
console.log(x); // 9
y--; // y = y - 1
console.log(y); // 1

// x++ identic cu x = x + 1 si x += 1
x+=10; // x = x + 10
console.log(x); // 19
x*=3; // x = x * 3
console.log(x); // 57
x%=7; // x = x % 7
console.log(x); // 1

// Comparatie: <, >, <=, >=, === inseamna strict egal, !==
console.log(x, y); // 1 1
console.log(x < y); // false
console.log(x > y); // false
console.log(x == '1'); // true
console.log(x === '1'); // false trei egaluri verifica si tipul de date

console.log(x !== '1'); // true
console.log(x !== 1); // false


// logici: && (si), || (sau), ! (negare)
var amRCA = true;
var amRovinieta = false;
var potCircula = amRCA ==true && amRovinieta==true; // false
console.log(potCircula);

var amCard = true;
var amCash = false;
var potPlati = amCard == true || amCash == true; // true
console.log(potPlati);


// Operatorul typeof
console.log(typeof 10); // number
console.log(typeof '10'); // string
console.log(typeof (2<3)); // boolean
console.log(typeof (10 + '10')); // string
var numeDeFamilie;
console.log(typeof numeDeFamilie); // undefined


// Operatorul ternar
var varsta= 28;
var poateConduce = varsta>=18? 'DA' : 'NU';