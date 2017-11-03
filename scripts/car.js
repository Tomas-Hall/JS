// my car object doesnt contain a license
// they exist within a car dictionary where the key is the license
// the value is the car object

// objects contain a number of key value pairs

const ageCost = 0.1; // age is a cost multipler
const faultCost = 20; // 20 quid because why not 
const carVars = ["type", "age", "faults", "checkedIn"]; // here we can set the naming convention of the car vars

let carDict = []; // an array that contains a list of objects that contain a key (car license plate) and a value (the rest of the car)

function returnKvp(key, value) {
    let kvp = {}; // make a new obj called kvp
    kvp.key = key;
    kvp.value = value;
    return kvp;
}
function car(type = "none", age = 0, faults = 0, checkedIn = false) {
    let toReturn = {};
    toReturn[carVars[0]] = type;
    toReturn[carVars[1]] = age;
    toReturn[carVars[2]] = faults;
    toReturn[carVars[3]] = checkedIn;

    return toReturn;
}
function addCar(license, car) {
    // license is the key, car is the value
    carDict.push(returnKvp(license, car));
}
// task 1 and 2 check in/out cars
function setStatus(license, status) {
    for (let i in carDict) {
        let kvp = carDict[i];
        if (kvp.key == license) { kvp.value["checkedIn"] = status; }
    }


}
// test of setStatus and addCar
/* 
    addCar("sudfh", car());
    console.log(carDict[0]);
    console.log(carDict[0].value["checkedIn"]);
    setStatus("sudfh", true);
    console.log(carDict[0].value["checkedIn"]);
*/

// task 3 print checked in cars
function garageContents() {
    let toReturn = [];
    for (let i in carDict) {
        let kvp = carDict[i];
        if (kvp.value[carVars[3]]) { toReturn.push(kvp); }
    }
    return toReturn;
}
// test of garageContents
/*
    addCar("sudfh", car());
    setStatus("sudfh", true);
    addCar("uwot123", car());
    setStatus("uwot123", true);
    addCar("rawr123", car());
    console.log(garageContents());
*/
// task 4 calculate a bill for the car
function calculateBill(car) {
    return car.faults * (1 + (car.age * ageCost)) * faultCost;
}

// test of calculate bill
/*
addCar("sudfh", car("kia", 0, 2, true));
console.log(calculateBill(carDict[0].value));
*/


// Test of dynamic keys
/*function test() {
    let toReturn = {};
    let dynKey = "hello";
    let someVar = 4;
    toReturn[dynKey] = someVar;
    return toReturn;
}
let aTest = test();
console.log(aTest.hello);
*/