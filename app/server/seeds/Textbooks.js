/**
 * A list of textbooks to pre-fill the Collection.
 * @type {*[]}
 */
var textbooksSeeds = [
  {title: "Basket", author: "A", isbn: 3},
  {title: "Bicycle", author: "B", isbn: 2}
];

/**
 * Initialize the Textbooks collection if empty with seed data.
 */
if (Textbooks.find().count() === 0) {
  _.each(textbooksSeeds,  function(textbooks) {
    Textbooks.insert(textbooks);
  });
}
