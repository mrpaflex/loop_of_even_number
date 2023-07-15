document.querySelector('#clickme').addEventListener('click', addToArray);


function addToArray(){


    let arrayA = Number(document.querySelector('#array').value);
    let emptArray = [ ];
    emptArray.push(arrayA);
    
    
    emptArray.forEach((items, index) => {
        emptArray[index] = items + 3;

        document.querySelector('#shows').innerText += ` ${emptArray[index]} `;
    });

}

document.querySelector('#average').addEventListener('click', averagefun);
function averagefun(){
    let sum = emptArray = [ ];
    for (let i = 0; i < emptArray[index].length; i++) {
        sum = sum +  emptArray[index][i];
        sum = sum/emptArray[index].length;
    
        document.querySelector('#avg').innerText = sum;
    }
    
}