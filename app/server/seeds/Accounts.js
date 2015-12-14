var StudentSeeds = [
  {first: "matt",last: "",email:"mgy"},
  {first: "brian",last: "",email:"bjboado"},

  {first: "sy",last: "",email:"sy"}
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
      return true;
    }

  }
  alert("Please register a new account");
  throw new Meteor.Error(403, "User not in the allowed list");
});