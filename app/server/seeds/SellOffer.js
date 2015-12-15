/**
 * A list of sellOffer to pre-fill the Collection.
 * @type {*[]}
 */
var sellOfferSeeds = [
  {isbn: "9780470509470", title: "a", condition: "good",offer: 1, owner: "mgy", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780073383095", title: "a", condition: "good",offer: 1, owner: "mgy", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0073383090.01.LZ.jpg"},
  {isbn: "9780470509470", title: "a", condition: "poor",offer: 2, owner: "bjboado", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780470128701", title: "a", condition: "poor",offer: 2, owner: "bjboado", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0470128704.01.LZ.jpg"},
  {isbn: "9780131103627", title: "a", condition: "poor",offer: 5, owner: "sy", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},
  {isbn: "9780073383095", title: "a", condition: "poor",offer: 5, owner: "sy", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0073383090.01.LZ.jpg"},
  {isbn: "9780262033848", title: "Introduction to Algorithms", condition: "poor",offer: 5, owner: "bjboado", expires: moment().format(), image: "http://images.amazon.com/images/P/0262033844.01.LZ.jpg", buyer: "sy"}

];

/**
 * Initialize the SellOffer collection if empty with seed data.
 */
if (SellOffer.find().count() === 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer);
  });
}
