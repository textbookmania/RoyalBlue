/**
 * A list of buyOffer to pre-fill the Collection.
 * @type {*[]}
 */
var buyOfferSeeds = [
  {isbn: "9780470509470", condition: "good",offer: 1,owner:"0", expires: moment().subtract(1,'days').format()},
  {isbn: "9780073383095", condition: "poor",offer: 2,owner:"0", expires: moment().format()},
  {isbn: "9780321776402", condition: "poor",offer: 5, owner: "2", expires: moment().add(1,'days').format()}
];



/**
 * Initialize the BuyOffer collection if empty with seed data.
 */
if (BuyOffer.find().count() === 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer);
  });
}
