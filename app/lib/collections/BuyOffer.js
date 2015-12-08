buyOffer = "BuyOffer";  // avoid typos, this string occurs many times.

BuyOffer = new Mongo.Collection(buyOffer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The Textbooks document.
   */
  addBuyOffer: function(doc) {
    textList=Textbooks.find().fetch();
    doc.image = _.find(textList, function(record){
      return record.isbn === doc.isbn;
    }).image;
    doc.expires=moment().add(7, 'days').format();
    doc.owner = Meteor.user().profile.name;
    //stop duplicate offers from same user
    if (_.findWhere(BuyOffer.find().fetch(), {owner: doc.owner, isbn: doc.isbn}) || _.findWhere(SellOffer.find().fetch(), {owner: doc.owner, isbn: doc.isbn}) ) {
      if (Meteor.isClient) {
        alert("You already have a sell offer or buy offer for that book.");
      }
      return;
    }
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
    BuyOffer.update({_id: docID}, {$set:{expires: moment().add(7, 'days').format()}});
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

  isbn: {
    label: "Book",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      options: function() {
        return _.map(Textbooks.find().fetch(), function (record) {
          return {label: record.title, value: record.isbn};
        });
      },
      group: buyOffer,
      placeholder: "0000000000"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    allowedValues: ['excellent', 'good', 'fair', 'poor'],
    optional: false,
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
    type: String,
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
  },
  seller: {
    label: "0",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: buyOffer,
      placeholder: ""
    }
  }

}));
