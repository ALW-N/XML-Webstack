function fetchRandomJoke() {
    const apiUrl = "https://v2.jokeapi.dev/joke/Any";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            displayJoke(data);
        })
        .catch(error => {
            console.error("Error fetching random joke:", error);
        });
}

function displayJoke(jokeData) {
    const jokeText = document.getElementById("jokeText");

    if (jokeData.type === "twopart") {
        jokeText.textContent = `${jokeData.setup} ${jokeData.delivery}`;
    } else {
        jokeText.textContent = jokeData.joke;
    }
}


// function fetchRandomJoke() {
//     const apiUrl = "https://v2.jokeapi.dev/joke/Any";

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {

//             displayJoke(data);
//         })
//         .catch(error => {
//             console.error("Error fetching random joke:", error);
//         });
// }

// function displayJoke(jokeData) {
//     const jokeText = document.getElementById("jokeText");

//     if (jokeData.type === "twopart") {
//         jokeText.textContent = `${jokeData.setup} ${jokeData.delivery}`;
//     } else {
//         jokeText.textContent = jokeData.joke;
//     }
// }