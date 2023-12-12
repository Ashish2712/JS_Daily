function calculateTotalSpentByCategory(transactions) {
    totalSpentByCategory = {}
    transactions.forEach(transaction => {
        const {category, price} = transaction //destructuring of object
        if (!totalSpentByCategory[category]) {
            totalSpentByCategory[category] = 0;
        }

        // Add the price to the total for the corresponding category
        totalSpentByCategory[category] += price;
    });

    // Convert the result object to an array of objects
    const result = Object.keys(totalSpentByCategory).map(category => ({
        category,
        totalSpent: totalSpentByCategory[category]
    }));

    return result;
}

var ans = calculateTotalSpentByCategory(transactions)
console.log(ans);

module.exports = calculateTotalSpentByCategory;