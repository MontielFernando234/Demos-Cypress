class CheckoutPage {
  private elements: {
    CART_TOTAL_PRICES: string;
    BUTTON_PLACE_ORDER: string;
    TEXTAREA_ORDER_COMMENT: string;
    SECTIONS_ORDER_DETAILS_TITLE: string;
    DELIVERY_ADDRESS_DATA: string;
    BILLING_ADDRESS_DATA: string;
  };

  constructor() {
    this.elements = {
      CART_TOTAL_PRICES: "p.cart_total_price",
      BUTTON_PLACE_ORDER: ".btn.btn-default.check_out",
      TEXTAREA_ORDER_COMMENT: "textarea[name='message']",
      SECTIONS_ORDER_DETAILS_TITLE: "div.step-one > h2",
      DELIVERY_ADDRESS_DATA: "#address_delivery",
      BILLING_ADDRESS_DATA: "address_invoice",
    };
  }

  get cartTotalPrices(): string {
    return this.elements.CART_TOTAL_PRICES;
  }

  get buttonPlaceOrder(): string {
    return this.elements.BUTTON_PLACE_ORDER;
  }

  get textareaOrderComment(): string {
    return this.elements.TEXTAREA_ORDER_COMMENT;
  }

  get sectionsOrderDetailsTitle(): string {
    return this.elements.SECTIONS_ORDER_DETAILS_TITLE;
  }

  get deliveryAddressData(): string {
    return this.elements.DELIVERY_ADDRESS_DATA;
  }

  get billingAddressData(): string {
    return this.elements.BILLING_ADDRESS_DATA;
  }

}

export default new CheckoutPage();