// let bc = ['green', 'yellow', 'blue', 'pink'];

// bc.forEach((x, i) => {

//     console.log(x, i);
    
// });


let movies = ['gang of Lagos', 'Lord of the ring', 'Passport', 'just Movies'];

// for (let x = 0; x < movies.length; x++) {
// // note that x, or i is the index in this for loop
    
// document.querySelector('').innerText += movies[x];
    
// }

movies.forEach((_, index) => {
   
    document.querySelector('h1').innerText += movies[index]
});

// note the two pattern will stil work and give same result///



