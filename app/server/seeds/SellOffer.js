/**
 * A list of sellOffer to pre-fill the Collection.
 * @type {*[]}
 */
var sellOfferSeeds = [
  {isbn: "1", condition: "good",offer: 1, owner: "1"},
  {isbn: "1", condition: "poor",offer: 2, owner: "2"}
];

/**
 * Initialize the SellOffer collection if empty with seed data.
 */
if (SellOffer.find().count() === 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer);
  });
}
