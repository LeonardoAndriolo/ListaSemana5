// 01

// let number = 1;
// while (number <= 10) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
//     number++;
// }

// 02

let result = 0;
for (let i = 10; i >= 0; i -= 2) {
    if (i === 4) {
        continue;
    }
    if (i === 6) {
        break;
    }
    result += i;
}

console.log(result)