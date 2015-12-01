/**
 * A list of textbooks to pre-fill the Collection.
 * @type {*[]}
 */
var textbooksSeeds = [
  {title: "The Art of Computer Programming", author: "Donald E. Knuth", isbn: "978-0321751041", image: "http://images.amazon.com/images/P/0321751043.01.LZ.jpg"},

  {title: "Java Concepts", author: "Cay S. HorstMann", isbn: "9780470509470", image: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},

  {title: "Discrete Mathematics and its Applications", author: "Kenneth H. Rosen", isbn: "9780073383095",image: "http://images.amazon.com/images/P/0073383090.01.LZ.jpg"},

  {title: "Data Structures: Abstraction and Design Using Java", author: "Elliot B. Koffman & Paul A. T. Wolfgang", isbn: "9780470128701",image: "http://images.amazon.com/images/P/0470128704.01.LZ.jpg"},

  {title: "The C Programming Language", author: "Brian W. Kernighan & Dennis M. Ritchie", isbn: "131103628",image: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},

  {title: "C++ Primer Plus", author: "Stephen Prata", isbn: "9780321776402", image: "http://images.amazon.com/images/P/0321776402.01.LZ.jpg"},

  {title: "The C Programming Language", author: "Brian W. Kernighan & Dennis M. Ritchie", isbn: "9780131103627",image: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},

  {title: "Introduction to Algorithmsa", author: "Thomas H. Cormen, Charles E. Leiserson), Ronald L. Rivest & Clifford Stein", isbn: "9780262033848",image: "http://images.amazon.com/images/P/026203384.01.LZ.jpg"},

  {title: "Programming Language Pragmatics", author: "Michael L. Scott", isbn: "10: 0123745144",image: "http://images.amazon.com/images/P/0123745144.01.LZ.jpg"},

  {title: "Programming Language Pragmatics", author: "Michael L. Scott", isbn: "13: 978-0123745149",image: "http://images.amazon.com/images/P/0123745144.01.LZ.jpg"},

  {title: "Land of Lisp: Learn to Program in Lisp", author: "Conrad Barski ", isbn: "978-1-59327-281-4",image: "http://images.amazon.com/images/P/1593272812.01.LZ.jpg"},

  {title: "Database Systems: The Complete Book", author: "Elliot B. Koffman & Paul A. T. Wolfgang", isbn: "9780131873254", image: "http://images.amazon.com/images/P/0470128704.01.LZ.jpg"},

  {title: "Data Structures: Abstraction and Design Using Java", author: "Hector Garcia-Molina, Jeffrey D. Ullman, & Jennifer Widom", isbn: "9781107027534",image: "http://images.amazon.com/images/P/0131873253.01.LZ.jpg"},

  {title: "Operating System Concepts", author: "braham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn: "9781118063330",image: "http://images.amazon.com/images/P/1118063333.01.LZ.jpg"},

  {title: "Operating System Concepts", author: "Abraham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn: "9781118129388", image: "http://images.amazon.com/images/P/1118063333.01.LZ.jpg"},

  {title: "Ethics for the Information Age", author: "Michael J. Quinn", isbn: "9780132855532",image: "http://images.amazon.com/images/P/0132855534.01.LZ.jpg"},

  {title: "Emotional Design: Why We Love (or Hate) Everyday Things", author: "Don Norman ", isbn: "465051367",image: "http://images.amazon.com/images/P/0465051367.01.LZ.jpg"},

  {title: "The Design of Everyday Things", author: "Donald A. Norman ", isbn: "465067107",image: "http://images.amazon.com/images/P/0465067107.01.LZ.jpg"},

  {title: "Presenting to Win: The Art of Telling Your Story, Updated and Expanded Edition", author: "Jerry Weissman g", isbn: "9780137144174",image: "http://images.amazon.com/images/P/0137144172.01.LZ.jpg"},

  {title: "Artificial Intelligence for Games", author: "Ian Millington & John Funge", isbn: "9780123747310",image: "http://images.amazon.com/images/P/0123747317.01.LZ.jpg"},

];

/**
 * Initialize the Textbooks collection if empty with seed data.
 */
if (Textbooks.find().count() === 0) {
  _.each(textbooksSeeds,  function(textbooks) {
    Textbooks.insert(textbooks);
  });
}
