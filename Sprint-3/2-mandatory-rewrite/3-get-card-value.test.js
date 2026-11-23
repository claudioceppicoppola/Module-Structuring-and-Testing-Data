const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return the numeric value for number cards between 2 and 9", () => {
    expect(getCardValue("5♥")).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for 10, J, Q, and K", () => {
    expect(getCardValue("10♣")).toEqual(10);
    expect(getCardValue("J♦")).toEqual(10);
    expect(getCardValue("Q♠")).toEqual(10);
    expect(getCardValue("K♥")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for any Ace", () => {
    expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card ranks", () => {
    expect(() => getCardValue("X♠")).toThrow("Invalid card rank.");
});