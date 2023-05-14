"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class LoggerClass extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const g = new LoggerClass();
g.logWithDate("hi");
