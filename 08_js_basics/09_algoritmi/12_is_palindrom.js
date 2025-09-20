// verifica daca un string este palindrom (se citeste la fel de la stanga la dreapta si de la dreapta la stanga)
function isPalindrom(str) {
    var left = 0;
    var right = str.length - 1;
   while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
        
    }
    return true;
}
    




    console.log(isPalindrom("radar")); // ar trebui sa printeze true
    console.log(isPalindrom("hello")); // ar trebui sa printeze false
    console.log(isPalindrom("level")); // ar trebui sa printeze true
