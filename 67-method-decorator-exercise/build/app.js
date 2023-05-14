"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        throw new Error("Error");
    }
}
__decorate([
    Catch(true)
], UserService.prototype, "getUserInDatabase", null);
function Catch(rethrow = false) {
    return (target, _, descriptor) => {
        const oldValue = descriptor.value;
        descriptor.value = (...args) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (oldValue === null || oldValue === void 0 ? void 0 : oldValue.apply(target, args));
            }
            catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                    if (rethrow)
                        throw e;
                }
            }
        });
    };
}
function Log() {
    return (target, propertyKey, descriptor) => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        // return {
        //     enumerable:true,
        // }
        // const oldValue = descriptor.value;
        descriptor.value = () => {
            console.log("No errors");
            // oldValue()
        };
    };
}
console.log(new UserService().getUserInDatabase());
