/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/students', {
  name: 'Students'
});

Router.route('/list', {
  name: 'ListStuff'
});

Router.route('/add', {
  name: 'AddStuff'
});

Router.route('/Help',{
  name: 'Help'
});

Router.route('/textbooks',{
  name: 'Textbooks'
});

Router.route('/addTextbook',{
  name: 'AddTextbook'
});

Router.route('/buyOrders',{
  name: 'BuyOrders'
});

Router.route('/addBuyOrder',{
  name: 'AddBuyOrder'
});

Router.route('/sellOrders',{
  name: 'SellOrders'
});

Router.route('/addSellOrder',{
  name: 'AddSellOrder'
});

Router.route('/matches',{
  name: 'Matches'
});

Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
