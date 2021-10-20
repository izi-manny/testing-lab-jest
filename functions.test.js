const {returnTwo, greeting, add, addNum} = require('./functions')

test("Should return the integer 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("Should return a Hello string", () => {
    expect(greeting("Joey")).toEqual("Hello, Joey")

    expect(greeting("Jill")).toEqual("Hello, Jill")
})

test("Should return the sum of the two numbers", () => {
    expect(add(3, 4)).toEqual(7)
    expect(add(5, 9)).toEqual(14)
})

it('Should contain a new number in the array', () => {
    expect(addNum(7)).toContain(7)
})