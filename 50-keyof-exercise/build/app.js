"use strict";
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function groupByKey(data, key) {
    return data.reduce((acc, el) => {
        const elKey = el[key];
        let currentEl = acc[elKey];
        if (Array.isArray(currentEl)) {
            currentEl.push(el);
        }
        else {
            currentEl = [el];
        }
        acc[elKey] = currentEl;
        return acc;
    }, {});
}
const res = groupByKey(data, "group");
console.log(res);
