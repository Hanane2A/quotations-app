const form = document.getElementById("formulaire-citations");

form.addEventListener("Cliquez ici" , function(){
    const inputCitation = document.getElementById("input-Citation");
    const inputAuthor = document.getElementById("input-Author");

    const quote =inputCitation.value;
    const author = inputAuthor.value;

    console.log("Citation:" , quote);
    console.log("Auteur/Autrice:" ,author);
})
    


function addQuote(quote, author){
    const quotText =document.createElement("p");
    quoteText.classList.add("text");
    quoteText.TextContent = quote;

    const quoteAuthor = document.createElement("p");
    quoteAuthor.classList.add("author");
    quoteAuthor.textContent= author;

    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quote")
    


}

addQuote(quote, author);
