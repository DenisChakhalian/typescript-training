enum PaymentStatus {
    Held,
    Processed,
    Reversed,
}

class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Held;
    createdAt: Date = new Date();
    updateAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unHoldPayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error("Payment error");
        }
        this.status = PaymentStatus.Reversed;
        this.updateAt = new Date();
    }
}

const payment = new Payment(1);
payment.unHoldPayment();
console.log(payment)
const time = payment.getPaymentLifeTime();

console.log(time);