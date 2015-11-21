student = "Student";  // avoid typos, this string occurs many times.

Student = new Mongo.Collection(student);



Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Student record.
   * @param doc The Textbooks document.
   */
  addStudent: function(doc) {
    //remove @hawaii.edu
    if(doc.email.indexOf('@') > -1){
      doc.email = doc.email.slice(0,doc.email.indexOf('@'));
    }
    console.log(Meteor.settings.allowed_users);
    //insert into allowed users if not already
    if(!_.contains(Meteor.settings.allowed_users, doc.email)) {
      Meteor.settings.allowed_users[Meteor.settings.allowed_users.length] = doc.email;
    }
    console.log(Meteor.settings.allowed_users);
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
    label: "First Name",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: student,
      placeholder: "first"
    }
  },
  last: {
    label: "Last Name",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: student,
      placeholder: "last"
    }
  },
  email: {
    label: "UHID",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: student,
      placeholder: "0"
    }
  },
  send: {
    label: "Send email notifications",
    type: Boolean,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      placeholder: "0"
    }
  }


}));
