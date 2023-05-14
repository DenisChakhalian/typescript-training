"use strict";
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortArrayWithObjId(arr, type) {
    if (type === "desc") {
        return arr.sort((a, b) => a.id - b.id > 0 ? -1 : 1);
    }
    return arr.sort((a, b) => a.id - b.id > 0 ? 1 : -1);
}
console.log(sortArrayWithObjId(data, "desc"));
console.log(sortArrayWithObjId(data, "asc"));
console.log(sortArrayWithObjId(data));
