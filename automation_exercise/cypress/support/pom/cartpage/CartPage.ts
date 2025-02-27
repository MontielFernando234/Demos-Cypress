class CartPage{
    private elements :{
        HEADER_CART:string,
        BODY_CART:string,
        BUTTON_CHECKOUT:string,
        CART_ITEM_DESCRIPTION:string,
        CART_ITEM_PRICE:string,
        CART_ITEM_QUANTITY:string,
        CART_ITEM_TOTAL:string,
        CART_ITEM_REMOVE:string,
    }

    constructor(){
        this.elements = {
            HEADER_CART: "thead > tr",
            BODY_CART: "tbody > tr",
            BUTTON_CHECKOUT: "a.btn.check_out",
            CART_ITEM_DESCRIPTION: "#product-index > td.cart_description",
            CART_ITEM_PRICE: "#product-index > td.cart_price",
            CART_ITEM_QUANTITY: "#product-index > td.cart_quantity",
            CART_ITEM_TOTAL: "#product-index > td.cart_total",
            CART_ITEM_REMOVE: "#product-index > td.cart_delete",
        }
    }

    get headerCart():string{
        return this.elements.HEADER_CART;
    }

    get bodyCart():string{
        return this.elements.BODY_CART;
    }

    get buttonCheckout():string{
        return this.elements.BUTTON_CHECKOUT;
    }

    get cartItemDescription():string{
        return this.elements.CART_ITEM_DESCRIPTION;
    }

    get cartItemPrice():string{
        return this.elements.CART_ITEM_PRICE;
    }

    get cartItemQuantity():string{
        return this.elements.CART_ITEM_QUANTITY;
    }

    get cartItemTotal():string{
        return this.elements.CART_ITEM_TOTAL;
    }

    get cartItemRemove():string{
        return this.elements.CART_ITEM_REMOVE;
    }
    
}

export default new CartPage();