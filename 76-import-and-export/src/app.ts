import run, {a, type MyType as MyType2} from "./module/app2";
import running from "./module/app2";
import * as all from "./module/app2";
import {Test as Cl} from "./module/app2";
import {MyType as T} from "./module/app2";
import type {MyType} from "./module/app2";
import {type MyType as type2} from "./module/app2";


const asd: T = 5;

new Cl()

run();
running();
console.log(a)
console.log(all.a);
all.default();