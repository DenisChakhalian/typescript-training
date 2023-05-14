abstract class Logger {
    abstract log(message: string): void;

    printDate(date: Date) {
        this.log(date.toString());
    }
}

/*@internal*/
class LoggerClass extends Logger {
    log(message: string): void {
        console.log(message)
    }

    logWithDate(message: string) {
        this.printDate(new Date())
        this.log(message)
    }
}

const g = new LoggerClass()

g.logWithDate("hi");