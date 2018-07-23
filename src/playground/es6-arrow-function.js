/*const square = function(x) {
    return x * x;
};



console.log(square(8));

/*const squareArrow = (x) => {
    return x * x;
};
*/
/*
const squareArrow = (x) => x * x;


console.log(squareArrow(9));*/

//create regular arrow function
//create arrow function with expression (shorthand) syntax
/*
const getFirstName = (name) => {
    const firstName = name.split(' ')[0];
    return firstName;
}*/

//const getLastName = (name) => const lastName = name.split(' ')[0];

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));