/**
 * A list of sellOffer to pre-fill the Collection.
 * @type {*[]}
 */
var sellOfferSeeds = [
  {isbn: "9780470509470", condition: "good",offer: 1, owner: "1"},
  {isbn: "9780073383095", condition: "poor",offer: 2, owner: "2"},
  {isbn: "9780321776402", condition: "poor",offer: 5, owner: "2"}
];

/**
 * Initialize the SellOffer collection if empty with seed data.
 */
if (SellOffer.find().count() === 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer);
  });
}
