birthdate = "2/10/1999";
const date = new Date(birthdate);
const birthYear = date.getFullYear();
const birthMonth = date.getMonth()+1;
const birthDay = date.getDate();
//console.log(date);

//https://www.30secondsofcode.org/js/s/days-in-month/
//const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

const numberOfDaysInMonth = function(year, month) {
    var numberOfDays = new Date(year, month, 0).getDate();
    return numberOfDays;
}


var numberOfDays = numberOfDaysInMonth(birthYear, birthMonth);
console.log(numberOfDays);

