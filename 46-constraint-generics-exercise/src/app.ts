const data = [
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
    {id: 3, name: 'Надя'},
];

function sortArrayWithObjId<T extends { id: number }>(arr: T[], type: "desc" | "asc" = "asc"): T[] | undefined {
    if (type === "desc") {
        return arr.sort((a, b) => a.id - b.id > 0 ? -1 : 1);
    } else if (type === "asc") {
        return arr.sort((a, b) => a.id - b.id > 0 ? 1 : -1);
    }
    return undefined;
}

console.log(sortArrayWithObjId(data, "desc"));
console.log(sortArrayWithObjId(data, "asc"));
console.log(sortArrayWithObjId(data));