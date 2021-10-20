let nums = [1, 5, 8]

module.exports = {
    returnTwo: () => {
        return 2;
    },
    greeting: (name) => {
        return `Hello, ${name}`
    },
    add: (num1, num2) => {
        return num1 + num2
    },
    addNum: (num) => {
        nums.push(num)
        return nums
    }
}