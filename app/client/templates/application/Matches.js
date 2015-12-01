Template.Matches.helpers({

  /**
   * @returns {*} All of the documents matching current users sell/buy offers.
   */
  findSellMatches: function () {
    var mySellOffer = SellOffer.find({ owner: Meteor.user().profile.name }).fetch();
    var sellOfferMatches=[];
    _.each(mySellOffer, function(rec){
      sellOfferMatches = sellOfferMatches.concat(BuyOffer.find({isbn: rec.isbn, expired: 'false'}).fetch());
    });
    return sellOfferMatches;

  },
  findBuyMatches: function () {
    var myBuyOffer = BuyOffer.find({owner: Meteor.user().profile.name}).fetch();
    var buyOfferMatches=[];
    _.each(myBuyOffer, function(record){
      buyOfferMatches = buyOfferMatches.concat(SellOffer.find({isbn: record.isbn, expired: 'false'}).fetch());
    });
    return buyOfferMatches;
  }
});

Template.Matches.events({
  'click .accept': function(e){
    e.preventDefault();
    if (confirm("Accept this offer??")) {
      var currentOfferId = this._id;
      Meteor.call("contactOfferOwner", currentOfferId);
      Router.go('Matches');
    }
  }
});