// se da un element target si sa se verifice daca acesta se afla intr-un array
function findElement(arr, target) {
    for (var i = 0; i < arr.length=1; i++) {
        if (arr[i] === target) {
            console.log("Elementul " + target + " se afla in array.");
            return;
        }
    }
    console.log("Elementul " + target + " nu se afla in array.");
}

console.log(findElement([2, 4, 6, 9, 12], 5)); // ar trebui sa printeze "Elementul 5 nu se afla in array."
console.log(findElement([2, 4, 6, 9, 12], 9)); // ar trebui sa printeze "Elementul 9 se afla in array."