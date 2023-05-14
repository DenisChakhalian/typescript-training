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

const split: <T>(data: Array<T>) => Array<T> = getSplitHalf;
const split2: <J>(data: Array<J>) => Array<J> = getSplitHalf;

interface ILogLine<T> {
    timeStamp: Date;
    data: T;
}

type LogLineType<T> = {
    timeStamp: Date;
    data: T;
}

const logLine: LogLineType<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}