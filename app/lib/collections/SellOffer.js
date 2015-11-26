sellOffer = "SellOffer";  // avoid typos, this string occurs many times.

SellOffer = new Mongo.Collection(sellOffer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new SellOffer record.
   * @param doc The Textbooks document.
   */
  addSellOffer: function (doc) {
    textList=Textbooks.find().fetch();
    doc.image = _.find(textList, function(record){
      return record.isbn === doc.isbn;
    }).image;
    doc.owner = Meteor.user().profile.name;
    check(doc, SellOffer.simpleSchema());
    SellOffer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a SellOffer record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editSellOffer: function (doc, docID) {
    check(doc, SellOffer.simpleSchema());
    SellOffer.update({_id: docID}, doc);
  },

  deleteSellOffer: function (docID) {
    SellOffer.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(sellOffer, function () {
    return SellOffer.find();
  });
}

/**
 * Create the schema for SellOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
SellOffer.attachSchema(new SimpleSchema({

  isbn: {
    label: "Book",
    type: String,
    optional: false,
    autoform: {
      options: function() {
        return _.map(Textbooks.find().fetch(), function (record) {
          return {label: record.title, value: record.isbn};
        });
      },
      group: sellOffer,
      placeholder: "0000000000"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    optional: false,
    autoform: {
      group: sellOffer,
      placeholder: "excellent, good, fair, or poor"
    }
  },
  offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: sellOffer,
      placeholder: "Whole dollars only"
    }
  },
  image: {
    label: "Image URL",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: sellOffer,
      placeholder: "image.org"
    }
  },
  expired: {
    label: "L",
    type: Boolean,
    optional: true,
    autoform: {
      type: "hidden",
      group: sellOffer,
      placeholder: ""
    }
  },
  created: {
    type: Date,
    optional: true,
    autoform: {
      type: "hidden",
      group: sellOffer,
      placeholder: "1"
    }
  },
  owner: {
    label: "0",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: sellOffer,
      placeholder: ""
    }
  }

}));
