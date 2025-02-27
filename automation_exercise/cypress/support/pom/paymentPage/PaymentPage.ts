class PaymentPage{
    private elements: {
        INPUT_NAME_ON_CARD: string;
        INPUT_CARD_NUMBER: string;
        INPUT_CVC: string;
        INPUT_EXPIRATION_MONTH: string;
        INPUT_EXPIRATION_YEAR: string;
        BUTTON_PAY_NOW: string;
        MESSAGE_PAYMENT_SUCCESS: string;
        TITLE_PAYMENT: string;
        TITLE_PAYMENT_DONE: string;
        MESSAGE_PAYMENT_DONE: string;
    };

    constructor() {
        this.elements = {
            INPUT_NAME_ON_CARD: "input[name='name_on_card']",
            INPUT_CARD_NUMBER: "input[name='card_number']",
            INPUT_CVC: "input[name='cvc']",
            INPUT_EXPIRATION_MONTH: "input[name='expiry_month']",
            INPUT_EXPIRATION_YEAR: "input[name='expiry_year']",
            BUTTON_PAY_NOW: "#submit",
            MESSAGE_PAYMENT_SUCCESS: "div.alert-success alert",
            TITLE_PAYMENT: "h2.heading",
            TITLE_PAYMENT_DONE: ".title.text-center",
            MESSAGE_PAYMENT_DONE: "div.row>div>p"
        };
    }

    get inputNameOnCard(): string {
        return this.elements.INPUT_NAME_ON_CARD;
    }

    get inputCardNumber(): string {
        return this.elements.INPUT_CARD_NUMBER;
    }

    get inputCvc(): string {
        return this.elements.INPUT_CVC;
    }

    get inputExpirationMonth(): string {
        return this.elements.INPUT_EXPIRATION_MONTH;
    }

    get inputExpirationYear(): string {
        return this.elements.INPUT_EXPIRATION_YEAR;
    }

    get buttonPayNow(): string {
        return this.elements.BUTTON_PAY_NOW;
    }

    get messagePaymentSuccess(): string {
        return this.elements.MESSAGE_PAYMENT_SUCCESS;
    }

    get titlePayment(): string {
        return this.elements.TITLE_PAYMENT;
    }

    get titlePaymentDone(): string {
        return this.elements.TITLE_PAYMENT_DONE;
    }

    get messagePaymentDone(): string {
        return this.elements.MESSAGE_PAYMENT_DONE;
    }
}

export default new PaymentPage();