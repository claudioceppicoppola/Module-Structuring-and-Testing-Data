function getCardValue(card) {
    // replace with your code from key-implement
    const rank = card.slice(0, -1);

    if (rank === "A") return 11;
    if (["10", "J", "Q", "K"].includes(rank)) return 10;

    const numericRank = Number(rank);
    if (Number.isInteger(numericRank) && numericRank >= 2 && numericRank <= 9) {
        return numericRank;
    }

    throw new Error("Invalid card rank.");
}
module.exports = getCardValue;