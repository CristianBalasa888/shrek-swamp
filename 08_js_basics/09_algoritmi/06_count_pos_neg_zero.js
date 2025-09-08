// count positive negative and zero elements in an array
function countPosNegZero(arr) {
    var countPos = 0;
    var countNeg = 0;
    var countZero = 0;

    for (var i = 0; i <= arr.length-1; i++) {
        if (arr[i] < 0) {
            countNeg++;
        } else if (arr[i] > 0) {
            countPos++;
        } else {
            countZero++;
        }
    }
    console.log("arrayul contine " + "Positive: " + countPos + ", Negative: " + countNeg + ", Zero: " + countZero);
}
countPosNegZero([2, 5, 7, 1, -3, 0, 4, 0, -1]);