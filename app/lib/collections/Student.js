student = "Student";  // avoid typos, this string occurs many times.

Student = new Mongo.Collection(student);

/*
 * Adds user to admin role if in admin_user list on login
 *
 */
Accounts.onLogin(function () {
  if (Meteor.user().profile.name && _.contains(Meteor.settings.admin_users, Meteor.user().profile.name)) {
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  }
});

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Student record.
   * @param doc The Student document.
   */
  addStudent: function (doc) {
    //remove @hawaii.edu
    if (doc.email.indexOf('@') > -1) {
      doc.email = doc.email.slice(0, doc.email.indexOf('@'));
    }
    //stop duplicate emails
    if (_.findWhere(Student.find().fetch(), {email: doc.email})) {
      if (Meteor.isClient) {
        alert("UHID already exists, try logging in.");
      }
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
   * Invoked by AutoForm to update a Student record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editStudent: function (doc, docID) {
    check(doc, Student.simpleSchema());
    Student.update({_id: docID}, doc);
  },
  /**
   *Remove student record and add to ban list
   * @param docID ID of record to be removed.
   */
  deleteStudent: function (docID) {
    if (Roles.userIsInRole(Meteor.userId()), 'admin') {
      if (Meteor.isServer) {
        //insert into banned_users
        if (!_.contains(Meteor.settings.banned_users, doc.email)) {
          Meteor.settings.banned_users.push(doc.email);
        }
      }
      Student.remove(docID);
    }
  },
  /**
   * email the owner of an offer if that user's notification is set to send email
   */
  contactOfferOwner: function(docId, doc){
    var seller=Student.findOne({email: doc.owner});
    //if(seller.send){window.open("mailto:"+seller.email+"@hawaii.edu");}
    console.log(seller);
    //check(doc, SellOffer.simpleSchema());
    //SellOffer.update({_id: docId}, doc);
  }
});

// Publish user data.  Subscription performed in the router.
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
    optional: true,
    max: 20,
    autoform: {
      group: student,
      placeholder: "first"
    }
  },
  last: {
    label: "Last Name",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      placeholder: "last"
    }
  },
  email: {
    label: "UH username",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: student,
      placeholder: "or UH email"
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
  },
  image: {
    label: "Image URL",
    type: String,
    optional: true,
    autoform: {
      group: student,
      placeholder: "image.com"
    }
  }
}));