
function calculeazaSuma() {
var primulNumar = Number(document.getElementById
('first-number').value);
var alDoileaNumar = Number(document.getElementById
('second-number').value);

console.log(primulNumar + alDoileaNumar)
var suma = primulNumar + alDoileaNumar;

document.getElementById('output').innerHTML= "Suma dintre " + primulNumar + " si " + alDoileaNumar + " este " + suma;
}