// let searchBtn = document.getElementsByClassName("search-btn")[0]; // Select the first element with class "search-btn"
// let countryInp = document.getElementsByClassName("country-inp")[0]; // Select the first element with class "country-inp"

// searchBtn.addEventListener("click", () => {
//     let countryName = countryInp.value;
//     let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//     console.log(finalUrl);
//     fetch(finalUrl)
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data[0]);
//         console.log(data[0].capital[0]);
//         console.log(data[0].flags.svg);
//         console.log(data[0].name.common);
//         console.log(data[0].continents[0]);
//         console.log(Object.keys(data[0].currencies) [0]);
//         console.log(data[0].currencies [Object.keys(data [0].currencies)].name);
//         console.log(Object.values (data[0].languages).toString().split(",").join(", "));
//         result.innerHTML=`
//         <img src="${data[0].flags.svg}"  class="flag-img">
//         <h2>${data[0].name.common}</h2>
//         <div class="wrapper">
//             <div class="data-wrapper">
//                 <h4>Capital :</h4>
//                 <span>${data[0].capital[0]}</span>  
//                 <br><h4>Continents:</h4>
//                 <span>${data[0].continents[0]}</span> </br>
//                 <br><h4>Currency:</h4>
//                 <span>${Object.keys(data[0].currencies) [0]}</span> </br>    
//                 <br><h4>Curreny Name:</h4>
//                 <span>${data[0].currencies [Object.keys(data [0].currencies)].name}</span></br>
//             </div>
            
//         </div>
//         `;
//     })
// });




let searchBtn = document.querySelector(".search-btn");
let countryInp = document.querySelector(".country-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value.trim();
    if (countryName === "") {
        alert("Please enter a country name.");
        return;
    }

    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Country not found");
        }
        return response.json();
    })
    .then(data => {
        let countryData = data[0];
        result.innerHTML = `
            <img src="${countryData.flags.svg}" class="flag-img">
            <h2>${countryData.name.common}</h2>
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${countryData.capital[0]}</span>
                <br>
                <h4>Continent:</h4>
                <span>${countryData.continents[0]}</span>
                <br>
                <h4>Currency:</h4>
                <span>${Object.keys(countryData.currencies)[0]}</span>
                <br>
                <h4>Currency Name:</h4>
                <span>${countryData.currencies[Object.keys(countryData.currencies)[0]].name}</span>
                <br>
                <h4>Languages:</h4>
                <span>${Object.values(countryData.languages).join(", ")}</span>
            </div>`;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        alert("Country not found or error fetching data.");
    });
});

