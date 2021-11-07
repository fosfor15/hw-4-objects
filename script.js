// Задание 1
// Создать объект, описывающий автомобиль: производитель,
// модель, год выпуска, средняя скорость, любые другие свойства 
// на ваше усмотрение, и следующие функции для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчёта необходимого времени для 
// преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю 
// необходимо делать перерыв на 1 час.

car = {
    mark: 'Nissan',
    model: 'X-Trail',
    color: 'red',
    middleSpeed: 120,
    engine: 'benzin',
    year: 2012
}

function showCarInfo(car) {
    console.log('car_1 :>> ', car.mark,
    car.model + '\n',
    'color: ' + car.color + '\n',
    'middleSpeed: ' + car.middleSpeed + '\n',
    'type of engine: ' + car.engine + '\n',
    'year of ' + car.year);
}

function countTimeOfDraving(distance) {
    var timeDriving = distance / car.middleSpeed;
    var countOfRelax = 0;
    for(var i = 1; i < timeDriving; i++) {
        if (i % 4 == 0 && !(timeDriving % i == 0)) {
            timeDriving ++;
            countOfRelax ++;
        }
    }
    return ('время в пути = ' + timeDriving.toFixed(1) + '\n' +
    'остановок в пути = ' + countOfRelax
    );
}

showCarInfo(car);
console.log(countTimeOfDraving(1200));


// Задание 2
// Создать 2 объекта, хранящие в себе отдельно числитель и 
// знаменатель для 2-х дробей, и следующие функции для работы с 
// этим объектами.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.
// 6. Метод для вывода дроби из объекта-дроби в удобном 
// для пользователя виде.

var numerator;
var denominator;

function createFraction(numerator, denominator) {
    return {numerator:numerator, denominator:denominator};
}

const fraction1 = createFraction(8, 5);
const fraction2 = createFraction(9, 13);

const commonDenominator = fraction1.denominator * fraction2.denominator;

function Operations(fraction1) {
    this.numerator = numerator;
    this.denominator = denominator;
    return fraction1;
}
console.log(fraction1);
console.log(fraction2);

Operations.sum = function(fraction1, fraction2) {
    var result = ((fraction1.numerator * fraction2.denominator) / commonDenominator) + 
    ((fraction2.numerator * fraction1.denominator) / commonDenominator); 
    return result.toFixed(3);
}

console.log('Результат сложения = ' + Operations.sum(fraction1, fraction2));

Operations.diff = function(fraction1, fraction2) {
    result = ((fraction1.numerator * fraction2.denominator) / commonDenominator) - 
    ((fraction2.numerator * fraction1.denominator) / commonDenominator); 
    return result.toFixed(3);
}

console.log('Результат вычитания = ' + Operations.diff(fraction1, fraction2));


function multipl(fraction1, fraction2) {
    result = ((fraction1.numerator * fraction2.numerator) / commonDenominator);
    return result.toFixed(3);
}

console.log('Результат умножения = ' + multipl(fraction1, fraction2));

function division(fraction1, fraction2) {
    result = ((fraction1.numerator * fraction2.denominator) / 
        (fraction1.denominator * fraction2.numerator));
    return result.toFixed(3);
}

console.log('Результат деления = ' + division(fraction1, fraction2));

function fractionReduction (numerator, denominator) {
    let max = Math.max(numerator, denominator);
    for (i = 2; i <= max; i++) {
        if(numerator % i == 0 && denominator % i == 0) {
            numerator /= i;
            denominator /= i;
        }
    }
    return {numerator:numerator, denominator:denominator};
}

console.log(fractionReduction(2, 6));//todo при добавлении 'Результат сокращения =' или попытке вывести исходную дробь выводит как Объект объект