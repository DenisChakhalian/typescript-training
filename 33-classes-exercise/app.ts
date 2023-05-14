class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {

    }
}

class Delivery {
    constructor(public date: Date) {
    }
}

class DeliveryToHome extends Delivery {
    constructor(date: Date, public address: string) {
        super(date);

    }
}

class DeliveryPointOfIssue extends Delivery {
    constructor(public idShop: number) {
        super(new Date());

    }
}

class Card {
    private products: Product[] = [];
    delivery: DeliveryToHome | DeliveryPointOfIssue;

    addProduct(product: Product): void {
        this.products.push(product);
    }

    deleteProduct(idProduct: number): void {
        this.products.filter((p: Product) => p.id !== idProduct);
    }

    totalPrice(): number {
        return this.products.reduce((acc, p) => acc += p.price, 0);
    }

    setDelivery(delivery: DeliveryToHome | DeliveryPointOfIssue): void {
        this.delivery = delivery;
    }

    checkout(): boolean {
        return !!(this.products.length && this.delivery);
    }
}


const cart = new Card();
cart.addProduct(new Product(1, "apple", 23));
cart.addProduct(new Product(2, "banana", 13));
cart.addProduct(new Product(3, "orange", 34));
cart.addProduct(new Product(4, "cake", 28));
cart.addProduct(new Product(5, "cookie", 35));

cart.deleteProduct(2);

cart.setDelivery(new DeliveryPointOfIssue(10));

console.log(cart.totalPrice());
console.log(cart.checkout());