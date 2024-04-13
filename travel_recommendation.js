function searchCondition() {
  const input = document.getElementById("countryInput").value.toLowerCase();
  const resultDiv = document.getElementById("data-container");
  resultDiv.innerHTML = "";

  fetch("./travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      const country = data.countries.find(
        (item) => item.name.toLowerCase() === input,
      );

      if (country) {
        console.log(country);
        resultDiv.innerHTML += `<p>${country.name}</p>`;

        country.cities.map((city) => {
          resultDiv.innerHTML += `<p>${city.name}</p>`;
        });
        // const name = condition.symptoms.join(", ");
        // const prevention = condition.prevention.join(", ");
        // const treatment = condition.treatment;

        // resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        // resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

        // resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
        // resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
        // resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
      } else {
        resultDiv.innerHTML = "Country not found.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      resultDiv.innerHTML = "An error occurred while fetching data.";
    });
}

document.getElementById("btnSearch").addEventListener("click", searchCondition);

function clearSearch() {
  document.getElementById("countryInput").value = "";
}
