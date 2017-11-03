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
    if (carDict.length == 0) { carDict.push(returnKvp(license, car)); }
    for (let i in carDict) {
        if (carDict[i].key == license) { carDict[i].value = car; break; }
        else { carDict.push(returnKvp(license, car)); break; }
    }
}
function addCarFromWebPage() {
    let plate = document.getElementById("lPlate").value;
    let type = document.getElementById("cType").value;
    let age = document.getElementById("age").value;
    addCar(plate, car(type, age));
    console.log(carDict[0]);
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
function garageContents(requestedStatus) {
    let toReturn = [];
    for (let i in carDict) {
        let kvp = carDict[i];
        if (kvp.value[carVars[3]] == requestedStatus) {
            toReturn.push(kvp);
        }
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

function findCar(license) {
    for (let i in carDict) {
        let kvp = carDict[i];
        if (kvp.key == license) { return kvp; }
    }

    return null;
}


addCar("na", car(undefined, undefined, undefined, true));
addCar("rawr", car());
addCar("uwot", car("m9", 0, 1, true));
addCar("meow", car("Siamese", 0, 3, true));
addCar("woof", car("grey hound", 0, 2400, true));
addCar("dev", car("", 0, 0, true));
addCar("QinetiQ", car("defence", 0, 5, true));
addCar("ohno", car("", 0, 2, false));
