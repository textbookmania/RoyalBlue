/**
 * After successful addition of a new textbooks document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddStudentForm: {
    /**
     * After successful form submission, go to the Listtextbooks page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('Student');
    }
  }
});