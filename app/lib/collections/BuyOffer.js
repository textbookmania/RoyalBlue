buyOffer = "BuyOffer";  // avoid typos, this string occurs many times.

BuyOffer = new Mongo.Collection(buyOffer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The Textbooks document.
   */
  addBuyOffer: function(doc) {
    doc["owner"] = Meteor.user().profile.name;
    check(doc, BuyOffer.simpleSchema());
    BuyOffer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a BuyOffer record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editBuyOffer: function(doc, docID) {
    check(doc, BuyOffer.simpleSchema());
    BuyOffer.update({_id: docID}, doc);
  },

  deleteBuyOffer: function(docID){
    BuyOffer.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(buyOffer, function () {
    return BuyOffer.find();
  });
}


/**
 * Create the schema for BuyOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
BuyOffer.attachSchema(new SimpleSchema({
  description: {
    label: "Decsription",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: buyOffer,
      placeholder: "Foo"
    }
  },
  isbn: {
    label: "ISBN",
    type: String,
    allowedValues:["1","2","3"],
    optional: false,
    max: 20,
    autoform: {
      group: buyOffer,
      placeholder: "0000000000"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    optional: false,
    max: 20,
    autoform: {
      group: buyOffer,
      placeholder: "excellent, good, fair, or poor"
    }
  },
  offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: buyOffer,
      placeholder: "0"
    }
  },
  image: {
    label: "Image URL",
    type: String,
    optional: true,
    max: 100,
    autoform: {
      type: "hidden",
      group: buyOffer,
      placeholder: "image.org"
    }
  },
  expires: {
    type: Date,
    optional: true,
    autoform: {
      type: "hidden",
      group: buyOffer,
      placeholder: "0"
    }
  },
  owner: {
    label: "Owner",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: buyOffer,
      placeholder: ""
    }
  }

}));
