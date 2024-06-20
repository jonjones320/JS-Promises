// //1
// $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`).then(res => {
//     let card = res.cards[0];
//     console.log(`${card.value} of ${card.suit}`)
//   }, err => {
//     console.log(err)
//   });



// // 2
// $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`
// ).then(res => {
//     let deckID = res.deck_id;
//     let card = res.cards[0];
//     console.log(`First card: ${card.value} of ${card.suit}`);
//     return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
// }).then(res => {
//     let card2 = res.cards[0];
//     console.log(`Second card: ${card2.value} of ${card2.suit}`);
// }, err => {
//     console.log(err)
// });



// 3. Build an HTML page that lets you draw cards from a deck. 
// When the page loads, go to the Deck of Cards API to create a new deck.
// Show a button on the page that will let you draw a card. 
// When you click the button, show a new card, until there are no cards left in the deck.

let deckID;
let $drawBtn = $('#draw-btn')
let $cardArea = $('#card-display')

$.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then(res => {
    deckID = res.deck_id;
  }, err => {
    console.log(err)
  });

$drawBtn.on('click', function() {
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`).then(
        res => {
            cardImg = res.cards[0].image;
            $cardArea.append($(`<img src=${cardImg}>`
            ));
            if (res.remaining === 0) $drawBtn.remove(); 
    })
})