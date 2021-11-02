
/* 
    Задание 1
*/

let car = {
    manufacturer: "Honda",
    model: "Civic",
    engineVolume: 2.0,
    color: "Red",
    maxSpeed: 235,
    yearOfRelease: 2002,
    horsePower: 215,
    averageSpeed: 160,

    driver: {
        name: "Sergey",
        age: 28
    },

    showCarInfo: function() {
        for (let key in this) {
            if (key == "driver") {
                for (let dKey in this.driver) {
                    console.log("driver." + dKey + " = " + this.driver[dKey]);
                }
                break;
            }

            console.log(key + " = " + this[key]);
        }
    },

    showTimeToRoad: function(distance) {
        let resultTime = distance / this.averageSpeed;
        let breakTime;
        if (resultTime % 4 == 0) {
            breakTime = resultTime / 4 - 1;
        } else {
            breakTime = Math.round(resultTime / 4);
        }
        let hours = Math.floor(resultTime) + breakTime;
        let minutes = Math.round(resultTime % 1 * 60);

        console.log(hours + " hours, and " + minutes + " minutes.")
    }
};

/*
    Задание 2
*/

// Первая дробь
let fraction1 = {
    numerator: 5,
    denominator: 7
};

// Вторая дробь
let fraction2 = {
    numerator: 12,
    denominator: 4
};

// Приведение к общему знаменателю
function commonDenominator(fr1, fr2) {
    fr1.numerator *= fr2.denominator;
    fr2.numerator *= fr1.denominator;
    fr1.denominator *= fr2.denominator;
    fr2.denominator *= fr1.denominator;
};

// Умножение
function multFractions(fr1, fr2) {
    let resultMult = {
        numerator: fr1.numerator * fr1.numerator,
        denominator: fr1.denominator * fr2.denominator
    }
    console.log(resultMult);
};

// Деление
function divFractions(fr1, fr2) {
    let resultDiv = {
        numerator: fr1.numerator * fr2.denominator,
        denominator: fr1.denominator * fr2.numerator
    }
    console.log(resultDiv);
};

// Сокращение 
function reductionFraction(fr) {
    for (let i = 2; i <= 9; i++) {
        if (fr.numerator % i == 0 && fr.denominator % i == 0) {
                fr.numerator /= i;
                fr.denominator /= i;                
        }
    }    
    console.log(fr);
}

// Вывод дробь в десятичном формате, не сокращал намеренно*
function fractionToString(fr) {
    console.log(fr.numerator / fr.denominator)
}

// Сложение
function sumFractions(fr1, fr2) {
    commonDenominator(fraction1, fraction2);
    let resultSum = {
        numerator: fr1.numerator + fr2.numerator,
        denominator: fr1.denominator
    }
    console.log(resultSum);
};

// Вычитание
function subsFractions(fr1, fr2) {
    commonDenominator(fraction1, fraction2);
    let resultSubs = {
        numerator: fr1.numerator - fr2.numerator,
        denominator: fr1.denominator
    }
    console.log(resultSubs);
};
