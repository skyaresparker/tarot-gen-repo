import { Deck } from "./cards.js";
import { getRandNum, upOrRev, cardGen, init } from "./components.js";

// select individual cards
const [card1, card2, card3] = document.querySelectorAll("img");

// select headers of individual cards to display title
const [firstH4, secondH4, thirdH4] = document.querySelectorAll("h4");

// select paragraphs of individual cards to display reading
const [p1, p2, p3] = document.querySelectorAll("p");

// select button to generate spread
const button = document.querySelector("button");

const threeCardSpread = function () {
  cardGen(card1, firstH4, p1);
  cardGen(card2, secondH4, p2);
  cardGen(card3, thirdH4, p3);
};

init(card1, firstH4, p1, card2, secondH4, p2, card3, thirdH4, p3);
button.addEventListener("click", threeCardSpread);
