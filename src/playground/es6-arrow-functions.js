//const square = function(x) {
//    return x * x;
//};

//const squareArrow = (x) => {
//    return x * x;
//}

//const squareArrow = (x) => x * x;

//console.log (squareArrow(12));

//const fullName = "Kevin Brail";

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Steve Newburg'));


const getNewFirstName = (fullName) => fullName.split(' ')[0];
console.log(getNewFirstName('Kevin Brail'));
