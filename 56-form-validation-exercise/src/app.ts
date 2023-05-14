interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
    name: "den",
    password: "qwerty",
}

type Validation<Type> = {
    [Property in keyof Type]: Property extends "name" ? { isValid: boolean } : { isValid: boolean, errorMessage: string };
    // or
    // [Property in keyof Type]:  { isValid: boolean } | { isValid: boolean, errorMessage: string };
}

const formValidation:Validation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: "Huge password"},
}