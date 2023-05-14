"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class DeliveryToHome extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class DeliveryPointOfIssue extends Delivery {
    constructor(idShop) {
        super(new Date());
        this.idShop = idShop;
    }
}
class Card {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(idProduct) {
        this.products.filter((p) => p.id !== idProduct);
    }
    totalPrice() {
        return this.products.reduce((acc, p) => acc += p.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
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
