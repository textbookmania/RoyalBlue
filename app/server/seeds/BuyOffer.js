/**
 * A list of buyOffer to pre-fill the Collection.
 * @type {*[]}
 */
var buyOfferSeeds = [
  {isbn: "9780470509470", condition: "good",offer: 1,owner:"0", expires: moment().subtract(1,'days').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780470509470", condition: "poor",offer: 2,owner:"1", expires: moment().format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780470509470", condition: "poor",offer: 5, owner: "2", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"}
];



/**
 * Initialize the BuyOffer collection if empty with seed data.
 */
if (BuyOffer.find().count() === 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer);
  });
}
