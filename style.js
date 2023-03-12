const quoteTittle = document.querySelector("#quote");
const authorName = document.querySelector("#author");
const api_url = "https://api.quotable.io/random";


async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content
    author.innerHTML = data.author
}
getquote(api_url)

const tweet = function () {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=650", "height=350");
}

function whatsapp() {
    window.open("whatsapp://send?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Whatsap Window", "width=650", "height=350");
}

const facebook = () => {
    window.open("https://www.facebook.com/sharer sharer.php?u=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=650", "height=350");
}