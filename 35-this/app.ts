class Payment {
    private date: Date = new Date();

    getDate(this: Payment, a: number) {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    }
}

const p = new Payment();

const user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow,
}

console.log(p.getDate(1));

console.log(user.paymentDate(1));
console.log(user.paymentDateArrow());

class PaymentPersistent extends Payment {
    save() {
        // return super.getDate(1);
        return this.getDateArrow();
    }
}

console.log(new PaymentPersistent().save());