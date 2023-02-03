var currentJoke;

function newJoke(){
    var jokeType = document.getElementById('selection').value;
    fetch('https://v2.jokeapi.dev/joke/'+jokeType+'?safe-mode&type=twopart')
    .then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error("network.request.!")
        }
    })
    .then((data) => {
        document.getElementById('text').innerHTML = data.setup;
        document.getElementById('next').style.display = "block";
        currentJoke = data;
    })
}

function throwBack(){
    document.getElementById('text').innerHTML = currentJoke.delivery;
    document.getElementById('next').style.display = "none";
    currentJoke = NULL;
}