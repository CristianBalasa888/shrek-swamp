
// function calculeazaSuma() {
// var primulNumar = Number(document.getElementById
// ('first-number').value);
// var alDoileaNumar = Number(document.getElementById
// ('second-number').value);

// console.log(primulNumar + alDoileaNumar)
// var suma = primulNumar + alDoileaNumar;

// document.getElementById('output').innerHTML= "Suma dintre " + primulNumar + " si " + alDoileaNumar + " este " + suma;
// }

// var numbers = [6, 2, 7, 8, 9];

var deCateOriSaDat66 = 0;
var nrTotalDeIncercari = 0;
while(true){
    var zar1 = parseInt(Math.random() * 6) + 1;
    var zar2 = parseInt(Math.random() * 6) + 1;
    nrTotalDeIncercari++;
    console.log(zar1 + " si " + zar2);  
    if (zar1 === 6 && zar2 === 6){
        deCateOriSaDat66=1000;
    }
    if (deCateOriSaDat66 === 1000){
        console.log('Nr total de aruncari', nrTotalDeIncercari);
        break;
    }

}
