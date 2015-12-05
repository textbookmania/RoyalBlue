/**
 * A list of sellOffer to pre-fill the Collection.
 * @type {*[]}
 */
var sellOfferSeeds = [
  {isbn: "9780470509470", condition: "good",offer: 1, owner: "3", expires: moment().subtract(1,'days').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780470509470", condition: "poor",offer: 2, owner: "4", expires: moment().format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780470509470", condition: "poor",offer: 5, owner: "5", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"}
];

/**
 * Initialize the SellOffer collection if empty with seed data.
 */
if (SellOffer.find().count() === 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer);
  });
}
