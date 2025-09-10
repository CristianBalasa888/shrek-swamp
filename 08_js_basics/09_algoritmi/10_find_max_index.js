// gaseste elementul maxim dintr-un array si returneaza indexul acestuia
function printIndexOfMaxElem(arr) {
    var max = arr[0];   
    var maxIndexValue = 0;
    for (var i = 1; i < arr.length-1; i++) {   
        if (max < arr[i]) {
            max = arr[i];
            maxIndexValue = i;
        }
    }
    console.log("Elementul maxim este " + max + " si se afla la indexul " + maxIndexValue);
}
printIndexOfMaxElem([2, 5, 7, 1, -3, 4]); // ar trebui sa printeze "Elementul maxim este 7 si se afla la indexul 2"