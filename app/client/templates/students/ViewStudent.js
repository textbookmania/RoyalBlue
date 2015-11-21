Template.ViewStudent.helpers({

  /**
   * @returns {*} All of the Student documents.
   */
  currentStudent: function () {

    return Student.find({ email: Meteor.user().profile.name });
  }
});

Template.ViewStudent.events({
  'click .delete': function(e){
    e.preventDefault();
    if (confirm("Delete this student??")) {
      var currentStudentId = this._id;
      Meteor.call("deleteStudent", currentStudentId);
      Router.go('Student');
    }
  }
});