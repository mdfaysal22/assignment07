const histories = document.getElementById("histories");
histories.classList.add('row');

function addHistory(questionText, timeTaken, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("col-12", "col-md-6", "col-lg-4");
  newRow.innerHTML = `
  <div class="history-card">
    <h3>${questionText}</h3>
    <div>
    <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
    </div>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("col-12", "col-md-6", "col-lg-4");

    newRow.innerHTML = `
    <div class="history-card">
      <div class = "row">
          <h3 class="col-12">${test.questionText}</h3>
          <p class="col-12">You took: <span class="bold">${parseInt(test.timeTaken)}</span> seconds</p>
          <p class="col-12">You made <span class="bold red">${test.errorCount}</span> mistakes</p>
      </div>
    </div>
  `;

    histories.appendChild(newRow);
  });
}
