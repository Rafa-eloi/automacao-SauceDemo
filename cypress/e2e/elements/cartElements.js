class CartElements {

    btnAddProductPrimary = () => "#inventory_container > div > div:nth-child(1) > div.pricebar > button";
    btnAddProductSecundary = () => "#inventory_container > div > div:nth-child(3) > div.pricebar > button";
    btnCart = () => "#shopping_cart_container > a";
    productCartValidatePrimary = () => "#cart_contents_container > div > div.cart_list > div:nth-child(3)";
    productCartValidateSecundary = () => "#cart_contents_container > div > div.cart_list > div:nth-child(4)";
    btnRemoveProductPrimary = () => "#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > button";
    btnRemoveProductSecundary = () => "#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > button";
}

export default new CartElements();

