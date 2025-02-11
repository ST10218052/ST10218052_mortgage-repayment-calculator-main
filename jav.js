document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', calculateMortgage);
});

function calculateMortgage() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const loanTermYears = parseInt(document.getElementById('loanTermYears').value);

    // Calculate monthly interest rate
    const monthlyInterestRate = annualInterestRate / 100 / 12;

    // Calculate number of payments
    const numberOfPayments = loanTermYears * 12;

    // Calculate monthly payment
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Display the result
    document.getElementById('result').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
// Display the result in the results1 div
document.getElementById('results1').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;