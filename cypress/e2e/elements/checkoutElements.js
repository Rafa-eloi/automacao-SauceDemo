class CheckoutElements {

    btnCheckout = () => "#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button";
    firstNameFild = () => "#first-name";
    lastNameFild = () => "#last-name";
    //postalCodeFild = () => "#postal-code";
    btnContinue = () => "#checkout_info_container > div > form > div.checkout_buttons > input";
    productValidatePrimary = () => "#checkout_summary_container > div > div.cart_list > div:nth-child(3)";
    productValidateSecundary = () => "#checkout_summary_container > div > div.cart_list > div:nth-child(4)";
    btnFinish = () => "#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button";
    
}

export default new CheckoutElements();
