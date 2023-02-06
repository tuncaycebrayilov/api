document.getElementById('search-btn').addEventListener('click', () => {

document.getElementById("Synonyms").innerHTML = ``
inputData = document.getElementById('Synonyms-input').value
fetch(`https://api.datamuse.com/words?rel_syn=${inputData}`)
    .then((resp) => resp.json())
    .then((data) => {
        for (let Synonym of data) {
            console.log(Synonym);
            document.getElementById("Synonyms").innerHTML += 
            `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                <h5 class="card-title">${Synonym.word}</h5>
                    </div>
                </div>
            </div>
            `
        }
    })

})