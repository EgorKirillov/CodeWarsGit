/*
let n=100000
let array = [], limit = Math.sqrt(n), result = [];

// Создаю массив от 2 до (n - 1)
for (let i = 2; i < n; i++) {
    array.push(true);
}

// Удаляю кратные 2, 3, 5...
for (let i = 2; i <= limit; i++) {
    if (array[i]) {
        for (let j = i * i; j < n; j += i) {
            array[j] = false;
        }
    }
}

// Все значения массива [i] true являются простыми числами
for (let i = 2; i < n; i++) {
    if(array[i]) {
        result.push(i);
    }
}

console.log(result.join(" "))
*/


function isPrimeNum(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    ;
    return true;
}
