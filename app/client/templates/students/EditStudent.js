/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditStudentForm: {
    /**
     * After successful form submission, go to the Listtextbooks page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ViewStudent');
    }
  }
});