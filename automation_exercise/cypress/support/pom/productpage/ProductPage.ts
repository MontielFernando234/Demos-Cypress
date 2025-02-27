class ProductPage {
  private element : {
    IMAGE_CARD: string
    PRODUCT_OVERLAY: string,
    BUTTON_ADD_TO_CART_OVERLAY : string,
    BUTTON_CONTINUE_TO_SHOPPING : string,
    LINK_VIEW_CART:string,
  };

  constructor(){
    this.element = {
      IMAGE_CARD: "div.single-products",
      PRODUCT_OVERLAY: "div.product-overlay",
      BUTTON_ADD_TO_CART_OVERLAY:`div.overlay-content > a[data-product-id="productID"]`,
      BUTTON_CONTINUE_TO_SHOPPING :`.modal-footer > .btn`,
      LINK_VIEW_CART:`div.modal-body>p>a`,
    };
  }

  get ImageCard() : string{
    return this.element.IMAGE_CARD;
  }

  get ProductOverlay() : string{
    return this.element.PRODUCT_OVERLAY;
  }

  get addToCartButtonOverlay():string{
    return this.element.BUTTON_ADD_TO_CART_OVERLAY;
  }

  get buttonContinueToShopping(){
    return this.element.BUTTON_CONTINUE_TO_SHOPPING;
  }

  get linkViewCart(){
    return this.element.LINK_VIEW_CART;
  }


}

export default new ProductPage();