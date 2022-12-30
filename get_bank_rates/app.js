// Event listener for get-rates button
document.getElementById('get-rates').addEventListener('click',getRates);

function getRates(e) {
    // testing event call
    // console.log('Joke Haha!');

    const date = document.querySelector('input[type="text"]').value;
    console.log(date);
    // instantiate xhr
    const xhr = new XMLHttpRequest()
    // open url 
    xhr.open('GET','https://www.bankofcanada.ca/valet/observations/group/bond_yields_benchmark/', true);

    xhr.onload = function(){
        
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            // TO-DO: Figure out how to search within JSON object for necessary rates and present table 
            let observations = response.observations[5500]
            const rateResults = document.createElement('div')
            rateResults.className = 'results';
            console.log(observations);
            // rateResults.innerHTML = `<label>${this.responseText}</label>`;
            if (observations.d===date) {
                console.log(observations.d.date);

            } else {
                console.log('nothing');
            }
        }
    }
    xhr.send();
    xhr.onerror = function () {
        console.log('Request Error!');
    }
    e.preventDefault();
}

