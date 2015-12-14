Template.ListSellOffer.helpers({

  /**
   * @returns {*} All of the sell offer documents owned by current user.
   */
  sellOfferList: function () {
    return SellOffer.find({ owner: Meteor.user().profile.name });
  },
  /**
   * @returns {*} All of the sell offer documents owned by all users.
   */
  allSellOfferList: function () {
    return SellOffer.find();
  },
  /**
   * @returns {*} expiration date as a countdown
   */
  expiresIn: function(){
    return moment(this.expires).from(moment());
  }
});

Template.ListSellOffer.events({
  'click .delete': function(e){
    e.preventDefault();
    if (confirm("Delete this sell offer??")) {
      var currentSellOfferId = this._id;
      Meteor.call("deleteSellOffer", currentSellOfferId);
      Router.go('ListSellOffer');
    }
  }
});