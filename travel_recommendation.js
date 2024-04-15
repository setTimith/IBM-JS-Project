function searchCondition() {
  const input = document.getElementById("countryInput").value.toLowerCase();
  const resultDiv = document.getElementById("data-container");
  resultDiv.innerHTML = "";

  fetch("./travel_recommendation_api.json")
    .then((response) => response.json())
    .then((data) => {
      const dataContainer = document.getElementById("data-container");

      function isInputBeach() {
        if (input === "beach" || input === "beaches" || input === "beachs") {
          return data.beaches;
        } else {
          return null;
        }
      }
      function isInputTemple() {
        if (input === "temple" || input === "temples") {
          return data.temples;
        } else {
          return null;
        }
      }
      const beach = isInputBeach();

      const temples = isInputTemple();

      function isInputCountries() {
        if (input === "country" || input === "countries") {
          return data.countries;
        } else {
          return null;
        }
      }

      const countries = isInputCountries();

      const country = data.countries.find(
        (item) => item.name.toLowerCase() === input,
      );

      if (country) {
        resultDiv.style.backgroundColor = "white";
        // Create and append a style element
        const style = document.createElement("style");
        document.head.appendChild(style);

        // Add scrollbar styles dynamically
        style.textContent = `
          #data-container {
            overflow-y: scroll;
            overflow-x:hidden;
          }

          #data-container::-webkit-scrollbar {
              width: 5px;
              background-color: lightgrey;
          }

          #data-container::-webkit-scrollbar-thumb {
              background-color: grey;
          }
      `;
        country.cities.map((city) => {
          resultDiv.innerHTML += `<h1>${city.name}</h1>`;
          resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<p>${city.description}</p>`;
        });
      } else if (countries !== null) {
        // Create and append a style element
        const style = document.createElement("style");
        document.head.appendChild(style);

        // Add scrollbar styles dynamically
        style.textContent = `
          #data-container {
            overflow-y: scroll;
            overflow-x:hidden;
          }

          #data-container::-webkit-scrollbar {
              width: 5px;
              background-color: lightgrey;
          }

          #data-container::-webkit-scrollbar-thumb {
              background-color: grey;
          }
      `;
        resultDiv.style.backgroundColor = "white";
        countries.map((country) => {
          country.cities.map((city) => {
            resultDiv.innerHTML += `<h1>${city.name}</h1>`;
            resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="hjh">`;
            resultDiv.innerHTML += `<p>${city.description}</p>`;
          });
        });
      } else if (beach !== null) {
        // Create and append a style element
        const style = document.createElement("style");
        document.head.appendChild(style);

        // Add scrollbar styles dynamically
        style.textContent = `
          #data-container {
            overflow-y: scroll;
            overflow-x:hidden;
          }

          #data-container::-webkit-scrollbar {
              width: 5px;
              background-color: lightgrey;
          }

          #data-container::-webkit-scrollbar-thumb {
              background-color: grey;
          }
      `;
        resultDiv.style.backgroundColor = "white";
        beach.map((beach) => {
          resultDiv.innerHTML += `<h1>${beach.name}</h1>`;
          resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<p>${beach.description}</p>`;
        });
      } else if (temples !== null) {
        // Create and append a style element
        const style = document.createElement("style");
        document.head.appendChild(style);

        // Add scrollbar styles dynamically
        style.textContent = `
          #data-container {
            overflow-y: scroll;
            overflow-x:hidden;
          }

          #data-container::-webkit-scrollbar {
              width: 5px;
              background-color: lightgrey;
          }

          #data-container::-webkit-scrollbar-thumb {
              background-color: grey;
          }
      `;
        resultDiv.style.backgroundColor = "white";
        temples.map((temple) => {
          resultDiv.innerHTML += `<h1>${temple.name}</h1>`;
          resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<p>${temple.description}</p>`;
        });
      } else {
        document.getElementById("data-container").style.justifyContent =
          "center";
        resultDiv.innerHTML = `<h1 class="stroke" style="align-self:center;justify-self:center;background-color:transparent;color:white;">Woops :(</h1>`;
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
  document.getElementById("data-container").innerHTML = "";
  const style = document.querySelector("style");
  if (style) {
    style.remove();
  }

  document.getElementById("data-container").style.backgroundColor = "";
  document.getElementById("data-container").style.justifyContent = "stretch";
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    searchCondition();
    document.getElementById("data-container").innerHTML = "";
    const style = document.querySelector("style");
    if (style) {
      style.remove();
    }
    document.getElementById("data-container").style.backgroundColor = "";
    document.getElementById("data-container").style.justifyContent = "stretch";
  }
}
