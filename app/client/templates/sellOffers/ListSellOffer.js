Template.ListSellOffer.helpers({

  /**
   * @returns {*} All of the Textbooks documents.
   */
  sellOfferList: function () {
    return SellOffer.find();
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