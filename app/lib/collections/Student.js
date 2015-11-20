student = "Student";  // avoid typos, this string occurs many times.

Student = new Mongo.Collection(student);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Student record.
   * @param doc The Textbooks document.
   */
  addStudent: function(doc) {
    check(doc, Student.simpleSchema());
    Student.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Student record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editStudent: function(doc, docID) {
    check(doc, Student.simpleSchema());
    Student.update({_id: docID}, doc);
  },

  deleteStudent: function(docID){
    Student.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(student, function () {
    return Student.find();
  });
}


/**
 * Create the schema for BuyOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Student.attachSchema(new SimpleSchema({
  first: {
    label: "First",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      placeholder: "First Name"
    }
  },
  last: {
    label: "Last Name",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: student,
      placeholder: "Last Name"
    }
  },
  email: {
    label: "Email",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      type: "hidden",
      group: student,
      placeholder: "0"
    }
  },
  send: {
    label: "Send email notifications",
    type: Boolean,
    optional: false,
    max: 20,
    autoform: {
      group: student,
      placeholder: "0"
    }
  }


}));
