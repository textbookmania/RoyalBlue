var studentSeeds = [
  {first:"Normal", last:"User",email:"normal@example.com",send:false,roles:[]},
  {first:"Admin", last:"User",email:"admin@example.com",send:false,roles:['admin']}
];


if (Student.find().count() === 0) {
  _.each(studentSeeds,  function(student) {
    Student.insert(student);
  });
};



/* Validate username, sending a specific error message on failure. */
Accounts.validateNewUser(function (user) {

  if (user) {
    var username = user.services.cas.id;
    if (username && _.contains(Meteor.settings.allowed_users, username)) {
      Roles.addUsersToRoles(username, 'admin');
      return true;
    }

  }
  throw new Meteor.Error(403, "User not in the allowed list");
});