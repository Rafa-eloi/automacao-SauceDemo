class LoginElements {

    btnLogin = () => "#login-button";
    userFild = () => "#user-name";
    passwordFild = () => "#password";
    successLogin = () => "#inventory_filter_container > div";
    btnMenu = () => "#menu_button_container > div > div:nth-child(3) > div > button";
    logout = () => "#logout_sidebar_link";
    errorMessage = () => "#login_button_container > div > form > h3";
}

export default new LoginElements();