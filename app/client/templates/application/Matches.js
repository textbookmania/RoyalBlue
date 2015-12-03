Template.Matches.helpers({

  /**
   * @returns {*} All non-expired matches for current users sell offers.
   */
  findSellMatches: function () {
    var mySellOffer = SellOffer.find({ owner: Meteor.user().profile.name }).fetch();
    var sellOfferMatches=[];
    _.each(mySellOffer, function(rec){
      sellOfferMatches = sellOfferMatches.concat(BuyOffer.find({isbn: rec.isbn}).fetch());
    });
    return sellOfferMatches;
  },

  /**
   * @returns {*} All non-expired matches for current users buy offers.
   */
  findBuyMatches: function () {
    var buyOfferMatches=[];
    var sellOfferCursor =[];
    var myBuyOffer = BuyOffer.find({owner: Meteor.user().profile.name}).fetch();
    _.each(myBuyOffer, function(record){
      sellOfferCursor = sellOfferCursor.concat(SellOffer.find({isbn: record.isbn}));
    });
    _.each(sellOfferCursor, function(curse) {
      curse.forEach(function (offer) {
        if (moment(offer.expires).isAfter()) {
          buyOfferMatches = buyOfferMatches.concat(offer);
        }
      });
    });
    return buyOfferMatches;
  }
});

Template.Matches.events({
  'click .accept': function(e){
    e.preventDefault();
    if (confirm("Accept this offer??")) {
      var docId = this._id;
      this.expires=moment().format('L');
      this.buyer=Meteor.user().profile.name;
      var doc = this;
      Meteor.call("contactOfferOwner", docId, doc);
      //Router.go('Matches');
    }
  }
});