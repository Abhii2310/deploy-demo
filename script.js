function calculatePercentage() {
    // Get input values
    const totalMarks = parseFloat(document.getElementById('total-marks').value);
    const obtainedMarks = parseFloat(document.getElementById('obtained-marks').value);
    const resultDiv = document.getElementById('result');

    // Check if input is valid
    if (isNaN(totalMarks) || isNaN(obtainedMarks) || totalMarks <= 0 || obtainedMarks < 0) {
        alert('Please enter valid marks!');
        resultDiv.style.display = 'none';
        return;
    }

    // Calculate percentage
    const percentage = (obtainedMarks / totalMarks) * 100;

    // Determine grade
    let grade;
    if (percentage >= 90) {
        grade = 'Excellent';
    } else if (percentage >= 75) {
        grade = 'Very Good';
    } else if (percentage >= 50) {
        grade = 'Good';
    } else {
        grade = 'Needs Improvement';
    }

    // Display result
    document.getElementById('percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('grade').innerText = `Grade: ${grade}`;
    resultDiv.style.display = 'block';
}
