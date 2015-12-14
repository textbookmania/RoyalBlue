Template.ListBuyOffer.helpers({

  /**
   * @returns {*} All of the buyOffer documents of current user.
   */
  buyOfferList: function () {
    return BuyOffer.find({ owner: Meteor.user().profile.name });
  },

  /**
   * @returns {*} All of the buyOffer documents of all users.
   */
  allBuyOfferList: function () {
    return BuyOffer.find();
  },
  /**
   * @returns {*} expiration date as a countdown
   */
  expiresIn: function(){
    return moment(this.expires).from(moment());
  }
});

Template.ListBuyOffer.events({
  'click .delete': function(e){
    e.preventDefault();
    if (confirm("Delete this buy offer??")) {
      var currentBuyOfferId = this._id;
      Meteor.call("deleteBuyOffer", currentBuyOfferId);
      Router.go('ListBuyOffer');
    }
  }
});