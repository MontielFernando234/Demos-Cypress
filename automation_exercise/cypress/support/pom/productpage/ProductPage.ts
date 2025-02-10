class ProductPage {
  private element : {
    imageCard: "div.single-products";
    productOverlay: "div.product-overlay";
  };

  getImageCard() : string{
    return this.element.imageCard;
  }

  getProductOverlay() : string{
    return this.element.productOverlay;
  }


}

export default new ProductPage();