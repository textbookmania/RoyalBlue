student = "Student";  // avoid typos, this string occurs many times.

Student = new Mongo.Collection(student);

/*
 *Adds user to admin role if in admin_user list
 *
 */
Accounts.onLogin(function(){
  console.log(Meteor.user().profile.name);
  if (Meteor.user().profile.name && _.contains(Meteor.settings.admin_users, Meteor.user().profile.name)) {
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  }
});

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Student record.
   * @param doc The Student document.
   */
  addStudent: function(doc) {

    //remove @hawaii.edu
    if(doc.email.indexOf('@') > -1){
      doc.email = doc.email.slice(0,doc.email.indexOf('@'));
    }

    //stop duplicate emails
    if(_.findWhere(Student.find().fetch(),{email: doc.email})){
      if(Meteor.isClient){alert("UHID already exists, try logging in.");}
      return;
    }
    if (Meteor.isServer) {
      //insert into allowed_users
      if (!_.contains(Meteor.settings.allowed_users, doc.email)) {
        Meteor.settings.allowed_users.push(doc.email);
      }
    }

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
