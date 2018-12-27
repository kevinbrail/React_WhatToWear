console.log('person.js is running!!!')

export const isAdult = (age) => ((age>17) ? true : false);
export const canDrink = (age) => ((age>20) ? true : false);
const isSenior = (age) => ((age>64) ? true : false);
export default isSenior;