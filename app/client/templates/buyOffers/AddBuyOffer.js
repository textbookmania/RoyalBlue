/**
 * After successful addition of a new buy offer document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddBuyOfferForm: {
    /**
     * After successful form submission, go to the List buy offer page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListBuyOffer');
    }
  }
});