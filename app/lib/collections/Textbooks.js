textbooks = "Textbooks";  // avoid typos, this string occurs many times.

Textbooks = new Mongo.Collection(textbooks);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Textbooks record.
   * @param doc The Textbooks document.
   */
  addTextbooks: function(doc) {
    doc.image = "images.amazon.com/images/P/"+ doc.isbn +".01.jpg";
    check(doc, Textbooks.simpleSchema());
    Textbooks.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Textbooks record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editTextbooks: function(doc, docID) {
    doc.image = "images.amazon.com/images/P/"+ doc.isbn +".01.jpg";
    check(doc, Textbooks.simpleSchema());
    Textbooks.update({_id: docID}, doc);
  },

  deleteTextbooks: function(docID){
    Textbooks.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(textbooks, function () {
    return Textbooks.find();
  });
}


/**
 * Create the schema for Textbooks
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Textbooks.attachSchema(new SimpleSchema({
  title: {
    label: "Title",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: textbooks,
      placeholder: "Foo"
    }
  },
  title: {
    label: "Title",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: textbooks,
      placeholder: "Foo"
    }
  },
  isbn: {
    label: "ISBN",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: textbooks,
      placeholder: "0000000000"
    }
  },
  image: {
    label: "Image URL",
    type: String,
    optional: true,
    max: 100,
    autoform: {
      type: "hidden",
      group: textbooks,
      placeholder: "image.org"
    }
  }


}));
