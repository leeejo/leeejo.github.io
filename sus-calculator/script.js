function calculateSUS() {
    var responsesInput = document.getElementById("responses");
    var responses = responsesInput.value.split(",").map(Number);

    // Check if there are exactly 10 responses
    if (responses.length !== 10) {
        alert("Please enter responses for all 10 statements.");
        return;
    }

    // Check if all responses are between 1 and 5
    if (responses.some(response => response < 1 || response > 5)) {
        alert("Please enter responses between 1 and 5.");
        return;
    }

    // Calculate SUS score
    var susScore = calculateSUSScore(responses);

    // Display the result
    document.getElementById("susScore").innerText = susScore.toFixed(2);
}

function calculateSUSScore(responses) {
    // Calculate combined responses
    var combinedResponses = [];
    for (var i = 0; i < responses.length; i += 2) {
        combinedResponses.push(responses[i] - 1);
        combinedResponses.push(5 - responses[i + 1]);
    }

    // Calculate total score
    var totalScore = combinedResponses.reduce(function (acc, val) {
        return acc + val;
    }, 0);

    // Multiply by 2.5 to get the SUS score
    var susScore = totalScore * 2.5;

    return susScore;
}
