Template.ListStudent.helpers({

  /**
   * @returns {*} All of the Student documents.
   */
  studentList: function () {
    return Student.find();
  }
});

Template.ListStudent.events({
  'click .delete': function(e){
    e.preventDefault();
    if (confirm("Delete this student??")) {
      var currentStudentId = this._id;
      Meteor.call("deleteStudent", currentStudentId);
      Router.go('ListStudent');
    }
  }
});