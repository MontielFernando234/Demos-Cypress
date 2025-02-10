class ProductPage {
  private element : {
    IMAGE_CARD: string
    PRODUCT_OVERLAY: string
  };

  constructor(){
    this.element = {
      IMAGE_CARD: "div.single-products",
      PRODUCT_OVERLAY: "div.product-overlay"
    };
  }

  get ImageCard() : string{
    return this.element.IMAGE_CARD;
  }

  get ProductOverlay() : string{
    return this.element.PRODUCT_OVERLAY;
  }


}

export default new ProductPage();