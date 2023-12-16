// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers () {
    let x = drivers.slice(0,2);
    return x;
}

returnFirstTwoDrivers ();

function returnLastTwoDrivers () {
    let x = drivers.slice(2);
    return x;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }

  ////Fare Quintupler
const fareQuintupler = createFareMultiplier(5);
let fare1 = 5;
const quintupledFare = fareQuintupler(fare1);
console.log(quintupledFare);


////FareDoubler
const fareDoubler = createFareMultiplier(2);
  
  const fare2 = 10;
  const doubledFare = fareDoubler(fare2);
  console.log(doubledFare);
  
const fareTripler = createFareMultiplier(3)
    const fare3 = 12;
    const tripledFare = fareTripler(fare3);
    console.log(tripledFare);


    function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
        return selectingFunction(arrayOfDrivers);
      }
      
      const arrayOfDrivers = ['Antonia', 'Nuru', 'Joe', 'Amari', 'Mo'];

      const firstTwoDrivers = selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers);
      
      const lastTwoDrivers = selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers);
      