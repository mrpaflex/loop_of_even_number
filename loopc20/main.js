

function thisarr(big){
        for (let i = 0; i <big.length ; i++) {
        if (big[0] < big[big.length-1]) {
            console.log('hi');
        }else if(big[0] > big[big.length-1]){
            console.log('bye');
        }else{
              console.log('we close in an hour');
          }

   }
}

thisarr([1, 3, 5, 7, 3]);


function arrproduct(arr){
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
         product = product * arr[i];
        console.log(product);
    }
}
//arrproduct([20, 3, 4]);


function produarr(arr){
    let produc = 1;
    arr.forEach(x => {
        x = produc * x;
        console.log(x);
    });
}

//produarr([2, 6, 3])
