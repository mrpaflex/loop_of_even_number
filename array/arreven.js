function evena(arr){
    let even = [ ];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
            
            
            //console.log(arr[i]);
        }
        
         
    }
    return even;
}

//console.log(evena([1, 2, 3, 4, 5, 6, 7, 8, 9]))
///////////or////////////

//using forEach loop

function evena(arr){
    let evenn = [ ];
    arr.forEach(i => {
        if (arr[i] % 2 === 0) {
            evenn.push(arr[i]);
        }
    });
    return evenn;
}

console.log(evena([1,2,3,4,5,6,7,8,9]))
