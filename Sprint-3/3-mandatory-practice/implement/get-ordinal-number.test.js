const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });

test("should return '2nd' and '3rd' for 2 and 3", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("should return 'th' for numbers ending in other digits like 4 and 10", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
    expect(getOrdinalNumber(10)).toEqual("10th");
});

test("should return 'th' for 11, 12, and 13", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
});

test("should handle numbers above 20 according to their digits", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(23)).toEqual("23rd");
    expect(getOrdinalNumber(111)).toEqual("111th");
});