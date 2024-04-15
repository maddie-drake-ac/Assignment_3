/*
 * Student Name: Maddie Drake 
 * Student ID: 041141815
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: 1 W24
 * Assignment: 3
 * Date Submitted: March 29 2024
 */

// function to validate an email address

const isValidEmail = function ($email) {
    var reg = /^[a-zA-Z0-9\.]+[^\W]+[a-zA-Z0-9-_\.]{2}[@][a-zA-Z0-9-_]*\.[a-z]{2}$/ 
    return reg.test($email);
}

// ------------------------------------------------------------------------- //
// question 1. //

// possible return values for the Date() constructor are: 
// day name, month name, year, time, offset from GMT
// though with methods you can return many things
/* Date.prototype.getDay()
   Date.prototype.getFullYear()
   Date.prototype.getHours()
   Date.prototype.getMilliseconds()
   Date.prototype.getMinutes()
   Date.prototype.getMonth()
   Date.prototype.getSeconds()
   Date.prototype.getTime()
   Date.prototype.getTimezoneOffset()
   Date.prototype.getUTCDate()
   Date.prototype.getUTCDay()
   Date.prototype.getUTCFullYear()
   Date.prototype.getUTCHours()
   Date.prototype.getUTCMilliseconds()
   Date.prototype.getUTCMinutes()
   Date.prototype.getUTCMonth()
   Date.prototype.getUTCSeconds()
   Date.prototype.getYear()
   Date.now()
   */

// question 2. //

// we must concatenate the date numbers into strings because 

// ------------------------------------------------------------------------- //

// helper functions

// https://www.30secondsofcode.org/js/s/days-in-month/
// const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
// learned this arrow function from here ⬆︎

const numberOfDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

// ------------------------------------------------------------------------- //

// function to validate age of majority

const isAgeOfMajority = (birthYear, birthMonth, birthDay) => {

    // validate argument type
    if (typeof(birthYear) !== 'number') {
        // console.log("wrong data type, year")
        result = false;
        return result;
    } else if (typeof(birthMonth) !== 'number') {
        // console.log("wrong data type, month")
        result = false;
        return result;
    } else if (typeof(birthDay) !== 'number') {
        // console.log("wrong data type, day")
        result = false;
        return result;
    }

    // create Date objects
    const TODAY = new Date();
    // concatenate arguments to string
    var birthdate = String(birthYear +"/"+ birthMonth +"/"+ birthDay);
    var birthdate = new Date(birthdate);
 
    const numberOfDays = numberOfDaysInMonth(birthYear, birthMonth, 0);
    
    const msToDays = 1000 * 60 * 60 * 24;
    const todayInDays = TODAY.valueOf() / msToDays;
    const birthdateInDays = birthdate.valueOf() / msToDays;
    const differenceInDays = todayInDays - birthdateInDays;

    if(Number.isNaN(birthYear) || (birthYear < 1920 || birthYear > 2010)) {
        result = false; 
        //console.log(result,"by birthYear check");
        return result;
    }
    if(Number.isNaN(birthMonth) || (birthMonth < 1 || birthMonth > 12)) {
        result = false;
        //console.log(result,"by birthMonth check");
        return result;
    }
    if(Number.isNaN(birthDay) || (birthDay < 0 || birthDay > numberOfDays)) {
        result = false;
        //console.log(result,"by birthDay check");
        return result;
    }
    if (differenceInDays > 6570) {
        result = true
        return result;
    } else {
        result = false
        return result;
    }

}


// ------------------------------------------------------------------------- //

// test

console.log(isAgeOfMajority(2005,2,25)); // true – just old enough
console.log(isAgeOfMajority(1997,2,29)); // false – not a leap year
console.log(isAgeOfMajority(2008,5,1)); // false
console.log(isAgeOfMajority(2000,1,1)); // true
console.log(isAgeOfMajority(1980,12,31)); // true
console.log(isAgeOfMajority("1980","12",31)); // false – wrong data type in parameter
















