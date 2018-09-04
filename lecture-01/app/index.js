const math = require('mathjs');

print("math.sqrt(4)", math.sqrt(4)) // 2
print("math.sqrt(-4)", math.sqrt(-4)) // 2i
console.log()

function print(message, value) {
    const precision = 14
    console.log(`${message}=${math.format(value, precision)}`)
}