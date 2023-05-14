type A = Awaited<Promise<string>>;          //:string
type A2 = Awaited<Promise<Promise<Promise<string>>>>;      //:string

interface IMenu {
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]> {
    return [{name: "Menu", url: "menu"}];
}

type R = Awaited<ReturnType<typeof getMenu>>;         //: IMenu[]

async function getArray<T>(x: T): Promise<Awaited<T>[]> {             //: Promise<Awaited<T>[]>
    return [await x];
}