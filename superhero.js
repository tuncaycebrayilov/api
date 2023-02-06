document.getElementById('search-btn').addEventListener('click', () => {
    document.getElementById("superhero").innerHTML = ``
    inputData = document.getElementById('superhero-input').value
    fetch(`https://www.superheroapi.com/api.php/727054372039115/search/${inputData}`)
        .then((resp) => resp.json())
        .then((data) => {
            for (let hero of data.results) {
                console.log(hero);
                document.getElementById("superhero").innerHTML += 
                `
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${hero.image.url}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${hero.name}</h5>
                            <h5 class="card-title">Power: ${hero.powerstats.power}</h5>
                            <h5 class="card-title">Speed: ${hero.powerstats.speed}</h5>
                            <p class="card-text">${hero.work.base}</p>
                        </div>
                    </div>
                </div>
                `
            }
        })

})