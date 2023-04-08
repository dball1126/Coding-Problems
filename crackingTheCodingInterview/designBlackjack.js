class BaseCard {
    color = "";
    value;
    type = "";

    constructor(color, type, value) {
        this.color = color;
        this.value = value;
        this.type = type;
    }
}

class  HighCard extends BaseCard {
    constructor(color, type, value){
        super(color, type, value);
    }
}

class LowCard extends BaseCard {
    constructor(color, type, value){
        super(color, type, value);
    }
}

class AceCard extends BaseCard {
    constructor(color, type, value){
        super(color, type, value);
    }
}

class Deck {
    size = 0
    cards = []
    constructor(ace, low, high) {
        this.size = ace + low + high;
        this.init(ace, low, high);
    }

    addCards (size, type) {
        let colors = [size/4, size/4, size/4, size/4]
        for (let j = 0; j < colors.length; j++) {
            let color, cardType;


            
            if (j === 0 || j === 1) {
                color = 'red'
            } else {
                color = 'black'
            }

            if (j === 0) cardType = 'diamond'
            if (j === 1) cardType = 'spade'
            if (j === 2) cardType = 'clove'
            if (j === 3) cardType = 'heart'

            for (let i = 0; i < colors[j]; i++) {

                if (type === 'ace') this.cards.push(new AceCard(color, cardType, j))
                if (type === 'lows') this.cards.push(new LowCard(color, cardType, j))
                if (type === 'highs') this.cards.push(new HighCard(color, cardType, j))
            }
            
        }
    }

    init (ace, low, high) {
        if (!ace || !low || !high || ace & 1 || low & 1 || high & 1) {
           console.log("All sizes of cards must be a multiple of 4")
        } else {
            this.addCards(ace, 'ace')
            this.addCards(low, 'lows')
            this.addCards(high, 'highs')
        }
    }
}

class BlackJack {
    
}

let deck = new Deck(4, 24, 24)
console.log(deck.cards)
console.log(deck)