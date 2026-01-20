document.getElementById("budget-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const totalBudget = parseFloat(document.getElementById("total-budget").value) || 0;
    const savings = parseFloat(document.getElementById("savings").value) || 0;
    const currency = document.getElementById("currency").value;

    if (savings > totalBudget) {
        alert("Savings cannot be more than your total budget!");
        return;
    }

    // Adjusted budget after savings
    const adjustedBudget = totalBudget - savings;

    // Suggested allocations (as percentages)
    const accommodationPercentage = 0.25; // 25%
    const transportationPercentage = 0.15;  // 15%
    const foodPercentage = 0.20;            // 20%
    const activitiesPercentage = 0.10;      // 10%
    const souvenirsPercentage = 0.10;       // 10%
    const remainingPercentage = 0.20;       // 20% reserved for remaining budget

    // Calculate suggested allocations based on adjusted budget (total - savings)
    const suggestedAccommodation = adjustedBudget * accommodationPercentage;
    const suggestedTransportation = adjustedBudget * transportationPercentage;
    const suggestedFood = adjustedBudget * foodPercentage;
    const suggestedActivities = adjustedBudget * activitiesPercentage;
    const suggestedSouvenirs = adjustedBudget * souvenirsPercentage;

    // Display suggested allocations with currency
    document.getElementById("suggest-accommodation").textContent = currency + " " + suggestedAccommodation.toFixed(2);
    document.getElementById("suggest-transportation").textContent = currency + " " + suggestedTransportation.toFixed(2);
    document.getElementById("suggest-food").textContent = currency + " " + suggestedFood.toFixed(2);
    document.getElementById("suggest-activities").textContent = currency + " " + suggestedActivities.toFixed(2);
    document.getElementById("suggest-souvenirs").textContent = currency + " " + suggestedSouvenirs.toFixed(2);

    // Calculate total expenses based on suggested values
    const totalExpenses = suggestedAccommodation + suggestedTransportation + suggestedFood + suggestedActivities + suggestedSouvenirs;

    // Remaining budget after expenses
    const remainingBudget = adjustedBudget - totalExpenses;

    // Display total expenses, savings, and remaining budget with currency
    document.getElementById("total-expenses").textContent = currency + " " + totalExpenses.toFixed(2);
    document.getElementById("saved-amount").textContent = currency + " " + savings.toFixed(2);
    document.getElementById("remaining-budget").textContent = currency + " " + remainingBudget.toFixed(2);
});
