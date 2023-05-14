"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Held"] = 0] = "Held";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Held;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unHoldPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error("Payment error");
        }
        this.status = PaymentStatus.Reversed;
        this.updateAt = new Date();
    }
}
const payment = new Payment(1);
payment.unHoldPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);
