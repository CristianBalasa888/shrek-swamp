// verifica daca un string este palindrom (se citeste la fel de la stanga la dreapta si de la dreapta la stanga)
function isPalindrom(str) {
    var left = 0;
    var right = str.length - 1;
   while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
        
    }
    return true;
}
    console.log("Stringul este palindrom.");




    isPalindrom("ana"); // ar trebui sa printeze "Stringul este palindrom."    isPalindrom("hello"); // ar trebui sa printeze "Stringul nu este palindrom."
    console.log(reversedStr);
}