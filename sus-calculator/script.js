function calculateAverage() {
    var scores = document.getElementById("responses").value.split(",");

    // Convert scores to numbers and calculate the average
    var total = 0;
    for (var i = 0; i < scores.length; i++) {
        total += parseFloat(scores[i]);
    }

    var average = total / scores.length;

    // Display the result
    document.getElementById("average").innerText = average.toFixed(2);
}
