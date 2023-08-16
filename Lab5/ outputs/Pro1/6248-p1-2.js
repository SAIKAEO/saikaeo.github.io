function get_pos_int() {
    do {
        let str_n = prompt("Enter positive integer");
        let n = Number(str_n);
        if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
            continue;
        }
        return n;
    } while (true);
}

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        alert("for n = " + n + " prime numbers are" + i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

let pos_int = get_pos_int();
document.write("You wrote " + pos_int + "<br/>");

showPrimes(pos_int);