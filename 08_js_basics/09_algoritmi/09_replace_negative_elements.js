// se da un array cu numere positive si negative, sa se inlocuiasca toate numerele negative cu pozitive
function replaceNegativeElements(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] < 0) {
            arr[i] = -arr[i];
        }   
    }
    console.log(arr);
}
var array = [2, -5, 7, -1, -3, 4];
replaceNegativeElements(arr); // ar trebui sa printeze [2, 5, 7, 1, 3, 4]
console.log(arr)