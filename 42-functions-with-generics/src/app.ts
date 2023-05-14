function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const res = logMiddleware<number>(10);
const res2 = logMiddleware<string>("10fds");

function getSplitHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

getSplitHalf<number>([1, 2, 3, 4]);