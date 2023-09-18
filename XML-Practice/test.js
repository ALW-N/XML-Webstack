function fetchjokes(){
    const apiUrl= 'https://v2.jokeapi.dev/joke/Any';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        displayJoke(data);
    })
    .catch(error => {
        console.log(" has occured", error);
    });

}
function displayJoke(jokeData){
    const jokeText = document.getElementById('joketext');
    if(jokeData.type === 'twopart'){
        jokeText.textContent = `${jokeData.setup} ${jokeData.delivery}`;
    }
    else{
        jokeText.textContent = jokeData.joke;
    }
}
