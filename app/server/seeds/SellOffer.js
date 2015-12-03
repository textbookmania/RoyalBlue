/**
 * A list of sellOffer to pre-fill the Collection.
 * @type {*[]}
 */
var sellOfferSeeds = [
  {isbn: "9780470509470", condition: "good",offer: 1, owner: "1", expires: moment().subtract(1,'days').format()},
  {isbn: "9780073383095", condition: "poor",offer: 2, owner: "2", expires: moment().format()},
  {isbn: "9780321776402", condition: "poor",offer: 5, owner: "2", expires: moment().add(1,'days').format()}
];

/**
 * Initialize the SellOffer collection if empty with seed data.
 */
if (SellOffer.find().count() === 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer);
  });
}
