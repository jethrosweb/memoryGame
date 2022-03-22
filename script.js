const cardArray = [
    {
        name: 'red',
        img: './image/red.png'
    },
    {
        name: 'teal',
        img: './image/teal.png'
    },
    {
        name: 'purple',
        img: './image/purple.png'
    },
    {
        name: 'pink',
        img: './image/pink.png'
    },
    {
        name: 'orange',
        img: './image/orange.png'
    },
    {
        name: 'green',
        img: './image/green.png'
    },
    {
        name: 'red',
        img: './image/red.png'
    },
    {
        name: 'teal',
        img: './image/teal.png'
    },
    {
        name: 'purple',
        img: './image/purple.png'
    },
    {
        name: 'pink',
        img: './image/pink.png'
    },
    {
        name: 'orange',
        img: './image/orange.png'
    },
    {
        name: 'green',
        img: './image/green.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.getElementById("grid")
const resultDisplay = document.getElementById("result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './image/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './image/back.png')
        cards[optionTwoId].setAttribute('src', './image/back.png')
    }

    if (cardsChosen[0] == cardsChosen[1]) { // if cardsChosen are a match
        cards[optionOneId].setAttribute('src', './image/blank.png')
        cards[optionTwoId].setAttribute('src', './image/blank.png')
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', './image/back.png')
        cards[optionTwoId].setAttribute('src', './image/back.png')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "Congratulations you found all pairs!"
    } 
}

function flipCard() {
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500 )
    }
}