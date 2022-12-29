// Add listeners for form submit
document.querySelector('#loan-form').addEventListener('submit', function(event){
    document.querySelector('#results').style.display = 'none';
    // Show loading gif 
    document.querySelector('#loading').style.display = 'block';
    // Make button unavailable
    setTimeout(reenableSubmit,1000);
    // Set time out same as button so that results shows up at same time
    setTimeout(calculateResults,1000);
    // TO-DO: Replace hard coded time with process time
    event.preventDefault();
});
function calculateResults() {
    
    const principal = parseFloat(document.querySelector('#amount').value);
    const interest = document.querySelector('#interest');
    const time = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(time.value) * 12;

    // Monthly payments
    const t = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*t*calculatedInterest)/(t-1);
    
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        // Show results
        document.querySelector('#results').style.display = 'block';
        // Hide loading 
        document.querySelector('#loading').style.display = 'none';
    } else {
        showError('Failed to Calculate. Check the your inputs!');
    }
    ;
}

// Show error 
function showError(error) {
    // Hide loading 
    document.querySelector('#loading').style.display = 'none';
    // Hide loading 
    document.querySelector('#results').style.display = 'none';
    // Create div
    const errorDiv = document.createElement('div');
    // appropriate class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Creating an Error Message Banner at the Top of your application.

    // Get card elements; places the error div above the card elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Insert error div element above the heading element
    card.insertBefore(errorDiv, heading);
    
    // remove error message after 3000 ms.
    setTimeout(clearError,3000);
}

// To remove error message banner 
function clearError(){
    document.querySelector('.alert').remove();
}


// Re-enable submit button 
function reenableSubmit() {
    const spinner_button = document.querySelector('#spinner-button');
    spinner_button.disabled = false;

}