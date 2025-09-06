// // Interval capacitate cilindrică	Tarif pe 200 cm³	Exemplu calcul pentru 1600 cm³
// Până la 1600 cm³	10 lei	8 × 10 = 80 lei
// 1601 – 2000 cm³	28 lei	10 × 23 = 230 lei
// 2001 – 2600 cm³	107 lei	13 × 90 = 1170 lei
// 2601 – 3000 cm³	215 lei	15 × 181 = 2715 lei
// Peste 3001 cm³	434 lei	16 × 364 = 5824 lei


var inputCapacitateCilindrica = document.getElementById("capacitate-cilindrica");
var paragrafRezultat = document.getElementById("rezultat");
function calculeazaImpozitAuto() {
    var impozitAuto = 0;
    var capacitateCilindrica=Number(inputCapacitateCilindrica.value);
    if(capacitateCilindrica <= 1600) {
        impozitAuto = (capacitateCilindrica/200)*10;}
        else if(capacitateCilindrica >1600 && capacitateCilindrica <= 2000){   
            impozitAuto = (capacitateCilindrica/200)*28;
        } else if(capacitateCilindrica >2000 && capacitateCilindrica <= 2600){
            impozitAuto = (capacitateCilindrica/200)*107;
        } else if(capacitateCilindrica >2600 && capacitateCilindrica <= 3000){
            impozitAuto = (capacitateCilindrica/200)*215;
        } else {
            impozitAuto = (capacitateCilindrica/200)*434;
        }
    
    paragrafRezultat.innerHTML = "Aveti de platit" + impozitAuto + " lei";

}