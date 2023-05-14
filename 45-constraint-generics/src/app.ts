class Vehicle {
    run: number;
}

// or
interface Vehicle2 {
    run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.5;
    return vehicle;
}

class LCV extends Vehicle {
    capacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({a: 2332});          // error
kmToMiles({run: 2332});


function logId<T extends string | number, Y>(id: T, data: Y): { id: T, data: Y } {
    console.log(id);
    console.log(data);
    return {id, data};
}