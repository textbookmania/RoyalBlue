/**
 * A list of buyOffer to pre-fill the Collection.
 * @type {*[]}
 */
var buyOfferSeeds = [
  {isbn: "3", condition: "good",offer: 1,owner:"0"},
  {isbn: "2", condition: "poor",offer: 2,owner:"0"}
];



/**
 * Initialize the BuyOffer collection if empty with seed data.
 */
if (BuyOffer.find().count() === 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer);
  });
}
