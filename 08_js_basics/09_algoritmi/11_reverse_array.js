// se da un array, sa se inverseze elementele acestuia fara a crea alt array
function reverseArray(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
var arr = [2, 5, 7, 1, -3, 4];
reverseArray(arr); // ar trebui sa printeze [4, -3, 1, 7, 5, 2]
console.log(arr);