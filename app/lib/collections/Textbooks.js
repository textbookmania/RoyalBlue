textbooks = "Textbooks";  // avoid typos, this string occurs many times.

Textbooks = new Mongo.Collection(textbooks);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Textbooks record.
   * @param doc The Textbooks document.
   */
  addTextbooks: function(doc) {
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
    autoform: {
      group: textbooks,
      placeholder: "title"
    }
  },
  author: {
    label: "Author",
    type: String,
    optional: false,
    autoform: {
      group: textbooks,
      placeholder: "author"
    }
  },
  isbn: {
    label: "ISBN",
    type: String,
    optional: false,
    autoform: {
      group: textbooks,
      placeholder: "isbn number"
    }
  },
  image: {
    label: "Image URL",
    type: String,
    optional: true,
    autoform: {
      group: textbooks,
      placeholder: "image"
    }
  }


}));
