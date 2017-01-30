console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
	//if ("queen" === "queen" && "king" === "king"){
	//	alert("You found a match!");
	//	}
	//else{
	//	alert("Sorry, not a match.");
	//}

	var gameBoard = document.getElementById('game-board');

	var createCards = function(){
		for (var i=0; i<cards.length; i++) {
			var drawCard = document.createElement('div');
			drawCard.className = "card";
			drawCard.setAttribute('data-card', cards[i]);
			drawCard.addEventListener('click', isTwoCards)
			gameBoard.appendChild(drawCard);
		}
	};
createCards();
function isTwoCards() {
	var whichCard = this.getAttribute('data-card');
	cardsInPlay.push(whichCard);
	if (whichCard === 'king') {
		this.innerHTML = '<img src="king.jpg" alt="King of Hearts" />';
    } else { 
    	this.innerHTML = '<img src="queen.jpg" alt="Queen of Hearts" />';

    }
	if (cardsInPlay.length === 2) {
		isMatch();
		cardsInPlay = [];
	}

}
 function isMatch() {
 	if (cardsInPlay[0] === cardsInPlay[1]){
 		alert("You found a match!");
 	}else{
 		alert("Sorry bout it.");

 	}
 	var cardDivs = document.getElementsByClassName('card');
		for (var i=0; i<cardDivs.length; i++) {
			cardDivs[i].innerHTML = "";
		}
 }

