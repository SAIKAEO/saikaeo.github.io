let enteredNumbers = [];

function get_pos_int() {
    do {
        let str_n = prompt("Enter positive integer");
        let n = Number(str_n);
        if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
            continue;
        }
        enteredNumbers.push(n);
    } while (true);
}

function displayStats(numbers) {
    let total = 0;
    let min = Number.MAX_VALUE;
    let max = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    let average = numbers.length > 0 ? total / numbers.length : 0;

    alert("Average: " + average + "\nMin: " + min + "\nMax: " + max);
}

get_pos_int();

if (enteredNumbers.length > 0) {
    displayStats(enteredNumbers);
}