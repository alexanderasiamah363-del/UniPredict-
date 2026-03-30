// Switch between Home and Predictor
function showSection(sectionId) {
    document.getElementById('hero').classList.add('display-none');
    document.getElementById('calculator').classList.add('display-none');
    document.getElementById(sectionId).classList.remove('display-none');
}

// Prediction Logic
function runPrediction() {
    const grades = [
        parseInt(document.getElementById('eng').value),
        parseInt(document.getElementById('math').value),
        parseInt(document.getElementById('soc').value),
        parseInt(document.getElementById('sci').value),
        parseInt(document.getElementById('e1').value),
        parseInt(document.getElementById('e2').value),
        parseInt(document.getElementById('e3').value)
    ];

    // Simple Aggregate Logic (Best 6)
    const sortedGrades = grades.sort((a, b) => a - b);
    const aggregate = sortedGrades.slice(0, 6).reduce((a, b) => a + b, 0);

    displayResults(aggregate);
}

function displayResults(agg) {
    const resultsArea = document.getElementById('results-area');
    
    // Switch background to KNUST if they qualify for CS
    if (agg <= 14) {
        document.body.className = 'bg-knust';
    }

    resultsArea.innerHTML = `
        <div class="glass-card result-match">
            <h4 style="color: #4ADE80;">HIGH PROBABILITY MATCH</h4>
            <h3>BSc. Computer Science (KNUST)</h3>
            <p>Your Aggregate: ${agg} | Required: 14</p>
            <p>Prediction Score: 89% (High)</p>
        </div>
    `;
}
