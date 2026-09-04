const cards = [
    { id: "react", image: "https://placehold.co/150x200/20232a/61dafb?text=React" },
    { id: "html", image: "https://placehold.co/150x200/e34f26/ffffff?text=HTML" },
    { id: "css", image: "https://placehold.co/150x200/1572b6/ffffff?text=CSS" },
    { id: "js", image: "https://placehold.co/150x200/f7df1e/000000?text=JS" },
    { id: "git", image: "https://placehold.co/150x200/f05032/ffffff?text=Git" },
    { id: "node", image: "https://placehold.co/150x200/339933/ffffff?text=Node" }
];

const cardGrid = document.getElementById("grid");
const restartButoon = document.getElementById("restart");
const moves = document.getElementById("moves");
const paires = document.getElementById("pairs");
const winMessage = document.getElementById("win-message");

let flippedCards = [];
let movesCount = 0;
let pairesCount = 0;
let boardLokc = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function initGame() {
    const gameCards = shuffle([...cards, ...cards]);
    gameCards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.id = card.id;
        cardElement.innerHTML = `
         <div class="card-front">
         <img src="${card.image}" alt="${card.id}">
        </div>
        <div class="card-back">?</div>  `
        cardElement.addEventListener("click", () => flippedCard(cardElement));
        cardGrid.appendChild(cardElement);
    });
}
function flippedCard(cardElement)
{
    if(boardLokc == true)
        {
            return ;
        }
    if(cardElement.classList.contains("flipped"))
    {
        return ;
    }
    if(cardElement.classList.contains("matched"))
    {
        return ;
    }
    cardElement.classList.add("flipped") ;
    flippedCards.push(cardElement);

    if(flippedCards.length== 2)
    {
        movesCount++ ;
        moves.textContent = movesCount ;
        checkMatch() ;
    }
}