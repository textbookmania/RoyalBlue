Template.Matches.helpers({

  /**
   * @returns {*} All of the documents matching current users sell/buy offers.
   */
  findMatches: function () {
    var  myBuyOffer = BuyOffer.find({ owner: Meteor.user().profile.name });
    var mySellOffer = SellOffer.find({ owner: Meteor.user().profile.name });
    return myBuyOffer;

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