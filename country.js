document.getElementById('search-btn').addEventListener('click', () => {
    document.getElementById("country").innerHTML = ``
    inputData = document.getElementById('country-input').value
    fetch(`https://restcountries.com/v3.1/name/${inputData}`)
        .then((resp) => resp.json())
        .then((data) => {
            for (let country of data) {
                console.log(country);
                document.getElementById("country").innerHTML += 
                `
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                        <div class="card-body"> 
                            <h5 class="card-title">${country.name.common}</h5>
                            <h5 class="card-title">Capital: ${country.capital}</h5> 
                            <h5 class="card-title">Region: ${country.region}</h5> 
                            <p class="card-text">Population: ${country.population}</p>
                        </div>
                    </div>
                </div>
                `
            }
        })

})