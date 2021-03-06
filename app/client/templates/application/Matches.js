Template.Matches.helpers({

  /**
   * @returns {*} All non-expired matches for current users sell offers.
   */
  findSellMatches: function () {
    var sellOfferMatches=[];
    var buyOfferCursor =[];
    var mySellOffer = [];
    var mySellOfferCurse = SellOffer.find({ owner: Meteor.user().profile.name });
    mySellOfferCurse.forEach(function(foo){
      if (moment(foo.expires).isAfter()) {
        mySellOffer=mySellOffer.concat(foo);
      }
    });
    _.each(mySellOffer, function(rec) {
      buyOfferCursor = buyOfferCursor.concat(BuyOffer.find({isbn: rec.isbn}));
    });
    _.each(buyOfferCursor, function(curse) {
      curse.forEach(function (offer) {
        if (moment(offer.expires).isAfter()) {
          sellOfferMatches = sellOfferMatches.concat(offer);
        }
      });
    });
    return sellOfferMatches;
  },

  /**
   * @returns {*} All non-expired matches for current users buy offers.
   */
  findBuyMatches: function () {
    var buyOfferMatches=[];
    var sellOfferCursor =[];
    var myBuyOffer = [];
    var myBuyOfferCurse = BuyOffer.find({owner: Meteor.user().profile.name});
    myBuyOfferCurse.forEach(function (foo){
        myBuyOffer=myBuyOffer.concat(foo);

    });
    _.each(myBuyOffer, function(record){
      sellOfferCursor = sellOfferCursor.concat(SellOffer.find({isbn: record.isbn}));
    });
    _.each(sellOfferCursor, function(curse) {
      curse.forEach(function (offer) {
        if (!moment(offer.expires).isAfter() && offer.buyer) {
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
      this.expires=moment().format();
      this.seller=Meteor.user().profile.name;
      var doc = this;
      Meteor.call("contactOfferOwner", docId, doc);
      //Router.go('Matches');
    }
  }
});