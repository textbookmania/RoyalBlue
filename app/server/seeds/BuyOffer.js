/**
 * A list of buyOffer to pre-fill the Collection.
 * @type {*[]}
 */
var buyOfferSeeds = [
  {isbn: "9780131103627", condition: "good",offer: 1, owner: "mgy", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},
  {isbn: "9780262033848", condition: "good",offer: 1, owner: "mgy", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0262033844.01.LZ.jpg"},
  {isbn: "9780131103627", condition: "poor",offer: 2, owner: "bjboado", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},
  {isbn: "9780262033848", condition: "poor",offer: 2, owner: "bjboado", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0262033844.01.LZ.jpg"},
  {isbn: "9780470509470", condition: "poor",offer: 5, owner: "sy", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780262033848", condition: "poor",offer: 5, owner: "sy", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0262033844.01.LZ.jpg"}
];



/**
 * Initialize the BuyOffer collection if empty with seed data.
 */
if (BuyOffer.find().count() === 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer);
  });
}
