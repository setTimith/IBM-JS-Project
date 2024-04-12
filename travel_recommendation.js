function searchCondition() {
  const input = document.getElementById("countryInput").value.toLowerCase();
  const resultDiv = document.getElementById("data-container");
  resultDiv.innerHTML = "";

  fetch(".json")
    .then((response) => response.json())
    .then((data) => {
      const country = data.countries.find(
        (item) => item.name.toLowerCase() === input,
      );

      if (country) {
        const name = condition.symptoms.join(", ");
        const prevention = condition.prevention.join(", ");
        const treatment = condition.treatment;

        resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

        resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
        resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
        resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
      } else {
        resultDiv.innerHTML = "Condition not found.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      resultDiv.innerHTML = "An error occurred while fetching data.";
    });
}
btnSearch.addEventListener("click", searchCondition);

function clearSearch() {
  document.getElementById("countryInput").value= "";
}