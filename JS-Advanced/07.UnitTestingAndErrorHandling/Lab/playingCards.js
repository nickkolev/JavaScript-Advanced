function solve(cardFace, cardSuit) {

    const validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',    // Spades (♠)
        H: '\u2665',    // Hearts (♥)
        D: '\u2666',    // Diamonds (♦)
        C: '\u2663',    // Clubs (♣)
    };
    
    if(!validCards.includes(cardFace) || !suits[cardSuit]){
        throw new Error('invalid face');
    }

    let card = {
        cardFace,
        suit: suits[cardSuit],
        toString(){
            return this.cardFace + this.suit;
        }
    };
    return card;
}

console.log(solve('A', 'S').toString());  // A♠
console.log(solve('10', 'H').toString()); // 10♥
console.log(solve('1', 'C').toString());  // Error