/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Textbooks"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/Help',{
  name: 'Help'
});

Router.route('/textbooks',{
  name: 'Textbooks'
});

Router.route('/addTextbooks',{
  name: 'AddTextbooks'
});

Router.route('/listBuyOffer',{
  name: 'ListBuyOffer'
});

Router.route('/addBuyOffer',{
  name: 'AddBuyOffer'
});

Router.route('/listSellOffer',{
  name: 'ListSellOffer'
});

Router.route('/addSellOffer',{
  name: 'AddSellOffer'
});

Router.route('/matches',{
  name: 'Matches'
});

Router.route('/textbooks/:_id', {
  name: 'EditTextbooks',
  data: function() { return Textbooks.findOne(this.params._id); }
});

Router.route('/listBuyOffer/:_id', {
      name: 'EditBuyOffer',
      data: function() { return BuyOffer.findOne(this.params._id); }
});

Router.route('/listSellOffer/:_id', {
  name: 'EditSellOffer',
  data: function() { return SellOffer.findOne(this.params._id); }
});
