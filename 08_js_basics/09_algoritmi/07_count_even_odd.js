// numara si printeaza numerele pare si impare dintr-un array
function countEvenOdd(arr) {
    var countEven = 0;
    var countOdd = 0;
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
    console.log("Arrayul contine " + countEven + " numere pare si " + countOdd + " numere impare.");    


}
countEvenOdd([2, 5, 7, 6, 3, 4]);