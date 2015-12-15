/**
 * A list of buyOffer to pre-fill the Collection.
 * @type {*[]}
 */
var buyOfferSeeds = [
  {isbn: "9780131103627", title: "The C Programming Language", condition: "good",offer: 1, owner: "mgy", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},
  {isbn: "9780262033848", title: "Introduction to Algorithms", condition: "good",offer: 1, owner: "mgy", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0262033844.01.LZ.jpg"},
  {isbn: "9780131103627", title: "The C Programming Language", condition: "poor",offer: 2, owner: "bjboado", expires: moment().add(1,'days').format(), image: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},
  {isbn: "9780470509470", title: "Java Concepts", condition: "poor",offer: 5, owner: "sy", expires: moment().add(1,'years').format(), image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},
  {isbn: "9780262033848", title: "Introduction to Algorithms", condition: "poor",offer: 5, owner: "sy", expires: moment().format(), image: "http://images.amazon.com/images/P/0262033844.01.LZ.jpg", seller: "bjboado"}
];



/**
 * Initialize the BuyOffer collection if empty with seed data.
 */
if (BuyOffer.find().count() === 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer);
  });
}
