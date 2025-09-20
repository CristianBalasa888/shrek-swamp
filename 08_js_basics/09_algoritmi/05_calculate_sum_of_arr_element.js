// sum of elements in an array
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
sumArray([2, 5, 7, 1, -3, 4]);