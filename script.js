
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

        // Для наглядности и читабельности кода конструкции условий if (а также switch, циклы, объявления функций, объекто, массивов и пр.) отделяйте пустыми строками от остального кода, который располагается по соседству сверху или снизу на том же уровне вложенности
        if (resultTime % 4 == 0) {
            breakTime = resultTime / 4 - 1;
        } else {

            breakTime = Math.round(resultTime / 4);
            // Если водитель будет ехать, к примеру, 19 часов, то получится что ему потребуется отдохнуть 5 часов, вместо 4-х заслуженных – здесь нужно использовать метод Math.floor() или Math.trunc()

        }

        let hours = Math.floor(resultTime) + breakTime;
        let minutes = Math.round(resultTime % 1 * 60);

        console.log(hours + " hours, and " + minutes + " minutes.") // ;
        // Что за длительность в часах и минутах выводится? Если бы здесь было указано к чему относится эта длительность, конечным пользователям было бы гораздо понятнее. Все выводы, которые просят сделать в задании, стоит делать понятными для конечных потенциальных пользователей.
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

    // Обычно аргументы функции – её входные данные – не меняют в процессе работы функции.
    // Также, вы меняете эти входные данные, однако результат этих изменений никуда не возвращается и не выводится – т.о. фунцкия не может предоставить результат своей работы.
    // Далее стало известно, что эта функция меняет внешние объекты fraction1 и fraction2, что также делать не нужно , т.к. потеряются нчальные данные, а также под именами этих начальных данных будут находится уже другие данные, что приведёт к затруднениям в понимании кода. Стоит оставлять неизменными начальные данные и входные аргументы функции.

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
    // В этой функции вы производите деления, на выходе получаете числовое значение и выводите в консоль. Однако вы не преобразуете что-либо здесь в строчное значение, соответственно приставка ToString в имени функции – лишняя и вводит в заблуждение. Можно было нахвать эту функцию с исп. глагола show.

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


// Все ваши функции и методы должны быть вызваны – нет смысла создавать что-то и не использовать это. Предполагаю, что вы запускаете создаваемые функции и методы у себя в консоли. Но будет намного лучше, если вы разместите в ваших решениях вызовы этих функций/методов со своими аргументами и результатами, в которых будете уверены.
