function Uni(name: string): any {
    console.log("Init :", name);
    return function () {
        console.log("Call :", name);
    }
}

@Uni("Class2")
@Uni("Class1")
class MyClass {
    @Uni("Property2")
    props2?: any
    @Uni("Property")
    props?: any
    @Uni("Static Property")
    static props2?: any

    @Uni("Method")
    method(@Uni("Method's Parameter") _: any) {

    }

    @Uni("Static Method")
    static method2(@Uni("Static Method's Parameter") _: any) {

    }

    constructor(@Uni("Constructor's Parameter") _: any) {
    }
}


// Init : Property2
// Call : Property2
// Init : Property
// Call : Property
// Init : Method
// Init : Method's Parameter
// Call : Method's Parameter
// Call : Method
// Init : Static Property
// Call : Static Property
// Init : Static Method
// Init : Static Method's Parameter
// Call : Static Method's Parameter
// Call : Static Method
// Init : Class2
// Init : Class1
// Init : Constructor's Parameter
// Call : Constructor's Parameter
// Call : Class1
// Call : Class2