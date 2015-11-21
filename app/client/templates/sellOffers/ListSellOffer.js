Template.ListSellOffer.helpers({

  /**
   * @returns {*} All of the sell offer documents owned by current user.
   */
  sellOfferList: function () {
    return SellOffer.find({ owner: Meteor.user().profile.name });
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