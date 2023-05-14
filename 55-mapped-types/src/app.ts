type Modifier = "read" | "update" | "create";

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier,
}

type ModifierToAccess<Type> = {
    [Property in keyof Type]: boolean;
    // [Property in keyof Type as Exclude<`canAccess${string & Property}`,"canAccessadminPanel">]: boolean;
    // [Property in keyof Type as `canAccess${string & Property}`]: boolean;
    // +readonly [Property in keyof Type]: boolean;
    // [Property in keyof Type]-?: boolean;
    // [Property in keyof Type]+?: boolean;
}

type UserAccess2 = ModifierToAccess<UserRoles>;          //type: {customers?: boolean, projects?: boolean, adminPanel?: boolean}

type UserAccess1 = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean,
}