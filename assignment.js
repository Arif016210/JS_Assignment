// Ans To The Qus No. 1

function feetToMile(feet) {
    var mile = feet * 0.00019;
    if (feet >= 0) {
        return mile;
    } else {
        return "pleses Enter Positive Number!!!";
    }
}

var result = feetToMile(12000);
console.log("Actually Result : ", result);
var roundResult = Math.round(result);
console.log("Round Result : ", roundResult);


// Ans to the Qus No. 2

function woodCalculator(chair, table, bed) {
    var result = chair * 1 + table * 3 + bed * 5;

    if (chair >= 0 && table >= 0 && bed >= 0) {
        return result;
    } else {
        return "pleses Enter Positive Number!!!";
    }
}

var needWood = woodCalculator(10, 0, 0);
console.log("Make for Chair need to wood : ", needWood, "Unit");

var needWood = woodCalculator(0, 6, 0);
console.log("Make for Table need to wood : ", needWood, "Unit");

var needWood = woodCalculator(0, 0, 2);
console.log("Make for Bed need to wood : ", needWood, "Unit");

var sum = woodCalculator(10, 6, 2);
console.log("Total Wood Need : ", sum, "Unit");


// Ans to the Qus No. 3

function brickCalculator(num) {


    if (num == 0) {
        return "Invalid";
    } else if (num > 0 && num <= 10) {
        var feet1 = num * 15;
        var floor1 = feet1 * 1000;
        return floor1;

    } else if (num => 11 && num <= 20) {
        var s = num - 10;
        var feet2 = s * 12;
        var floor2 = (150000 + (feet2 * 1000));
        return floor2;

    } else if (num => 21) {
        var a = num - 20;
        var feet3 = a * 10;
        var floor3 = (270000 + (feet3 * 1000));
        return floor3;
    }

}



// Ans To the Qus No. 4


function tinyFriends(name) {

    var smallestName = name[0];

    for (var i = 1; i < name.length; i++) {
        var compareName = name[i];
        if (compareName.length < smallestName.length) {
            smallestName = compareName;
        }
    }

    return smallestName;
}
var result = tinyFriends(["arif", "bappi", "rakibul"]);
console.log("Smallest Name : ", result);