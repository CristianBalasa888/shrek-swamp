// find min element in an array
function printMin(arr) {
    var min = arr[0];
    for(var i=0; i<=arr.length-1; i++)
        {if(min>arr[i])
            {min=arr[i];}
        }
    console.log(min);
}   
printMin([2,5,7,1,-3,4]);