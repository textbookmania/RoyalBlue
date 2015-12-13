/**
 * A list of sellOffer to pre-fill the Collection.
 * @type {*[]}
 */
var sellOfferSeeds = [
  {isbn: "9780470509470", condition: "good",offer: 1, owner: "mgy", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780073383095", condition: "good",offer: 1, owner: "mgy", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0073383090.01.LZ.jpg"},
  {isbn: "9780470509470", condition: "poor",offer: 2, owner: "bjboado", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780470128701", condition: "poor",offer: 2, owner: "bjboado", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0470128704.01.LZ.jpg"},
  {isbn: "9780131103627", condition: "poor",offer: 5, owner: "sy", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},
  {isbn: "9780073383095", condition: "poor",offer: 5, owner: "sy", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0073383090.01.LZ.jpg"}
];

/**
 * Initialize the SellOffer collection if empty with seed data.
 */
if (SellOffer.find().count() === 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer);
  });
}
