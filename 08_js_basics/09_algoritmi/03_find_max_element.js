// afiseaza maximul din array
function printMax(arr) {
    var max = arr[0];
    for(var i=0; i<arr.length-1; i++) 
        {if(max<arr[i])
            {max=arr[i];}   
        }
    console.log(max);
}
printMax([2,5,7,1,-3,4]);

