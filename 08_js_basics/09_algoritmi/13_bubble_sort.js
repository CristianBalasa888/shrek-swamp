// cele mai mari numere se muta spre dreapta facand schimb de pozitii pentru a avea un bubble sort
function bubbleSort(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2])); // ar trebui sa printeze [2, 3, 4, 5, 8]
console.log(bubbleSort([1, 2, 3, 4, 5])); // ar trebui sa printeze [1, 2, 3, 4, 5]


