class Vehicle {
    public make: string;
    private damages: string[];
    private _model: string;
    protected run: number;
    #price: number;

    set model(model: string) {
        this._model = model;
        this.#price = 100;
    }

    get model() {
        // this.run //exist
        return this._model;
    }

    isPriceEqual(v:Vehicle){
        return this.#price === v.#price;
    }

    private addDamage(damage: string) {
        this.damages.push(damage);
    }
}

class EuroTruck extends Vehicle {
    setDamage() {
        // this._model
    }

    setRun(km: number) {
        // this.#price = 100;         // error
        this.run = km / 0.5;
        // this.damages    // error
    }
}

new Vehicle().make = "sasdf";

// new Vehicle().damages;           //error
// new Vehicle().run;        //error