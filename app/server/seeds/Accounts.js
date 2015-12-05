var StudentSeeds = [
  {first: "3",last: "good",email:"admin"},
  {first: "2",last: "poor",email:"0"}
];

/**
 * Initialize the BuyOffer collection if empty with seed data.
 */
if (Student.find().count() === 0) {
  _.each(StudentSeeds,  function(student) {
    Student.insert(student);
  });
}

/* Validate username, sending a specific error message on failure. */
Accounts.validateNewUser(function (user) {
  if (user) {
    var username = user.services.cas.id;
    if (username && _.contains(Meteor.settings.allowed_users, username)) {
      //admin role added to user in lib/collection/Student.js
      /*
      if (_.contains(Meteor.settings.admin_users, username)) {
        Roles.addUsersToRoles(username, 'admin');
      }*/
      if (_.contains(Meteor.settings.banned_users, username)) {
        alert("denied: contact admin");
        throw new Meteor.Error(0, "User has been banned. Contact admin");
      }
      return true;
    }

  }
  alert("Please register a new account");
  throw new Meteor.Error(403, "User not in the allowed list");
});