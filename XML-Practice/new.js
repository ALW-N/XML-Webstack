const bookAPI = "https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b"
var bookButton = document.getElementById("books")
var bookList = []
bookButton.addEventListener('click', async () => {

    bookList = []

    await fetch(bookAPI)

        .then(response => response.json()
            .then(data => {
                bookList = data.results.books
                for (let i = 0; i < bookList.length; i++) {
                    var row = document.createElement("tr")
                    var title = document.createElement("td")
                    title.innerHTML = bookList[i].title
                    var author = document.createElement("td")
                    author.innerHTML = bookList[i].author
                    var desc = document.createElement("td")
                    desc.innerHTML = bookList[i].description
                    row.appendChild(title)
                    row.appendChild(author)
                    row.appendChild(desc)
                    document.getElementById("bookbody").append(row)
                }
            })
        )

})

function fetchRandomDogImage() {
    const apiUrl = "https://dog.ceo/api/breeds/image/random";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            dogImage(data.message);
        })
}
function dogImage(data) {
    const dogImage = document.getElementById("dogImage");
    dogImage.src = data;
}

function fetchRandomJoke() {
    const apiUrl = "https://v2.jokeapi.dev/joke/Any"

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayJoke(data);
        })
}

function displayJoke(data) {
    const jokeText = document.getElementById("jokeText");

    if (data.category == "Programming" || data.category == "Pun" || data.category == "Spooky") {
        if (data.type == "twopart")
            jokeText.textContent = `${data.setup} ${data.delivery}`;
        else
            jokeText.textContent = data.joke;
    }
    else {
        jokeText.textContent = "**Click on the button again to get good jokes**"
    }
}

