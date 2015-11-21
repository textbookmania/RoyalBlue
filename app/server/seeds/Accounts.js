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
      if (!_.contains(Meteor.settings.banned_users, user.services.cas.id)) {
        throw new Meteor.Error(0, "Contact admin");
      }

      return true;
    }

  }
  throw new Meteor.Error(403, "User not in the allowed list");
});