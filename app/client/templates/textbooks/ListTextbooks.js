Template.Textbooks.helpers({

  /**
   * @returns {*} All of the Textbooks documents.
   */
  textbooksList: function () {
    return Textbooks.find();
  }
});

Template.Textbooks.events({
  'click .delete': function(e){
    e.preventDefault();
    if (confirm("Delete this textbook??")) {
      var currentTextbookId = this._id;
      Meteor.call("deleteTextbooks", currentTextbookId);
      Router.go('Textbooks');
    }
  }
});