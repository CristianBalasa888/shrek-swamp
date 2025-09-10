// binary search
// https://www.youtube.com/watch?v=P3YID7liBug

function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;
     while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid; // elementul a fost gasit, returnam indexul
        }
        if (arr[mid] < target) {
            left = mid + 1; // cautam in jumatatea dreapta
        }
        else {
            right = mid - 1; // cautam in jumatatea stanga
        }
    }
    return -1; // elementul nu a fost gasit
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // ar trebui sa printeze 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4)); // ar trebui sa printeze []