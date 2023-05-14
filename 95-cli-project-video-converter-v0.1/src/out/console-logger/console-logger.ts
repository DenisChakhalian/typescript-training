import {IStreamLogger} from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {
    private static logger: ConsoleLogger;

    public static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }

    end(): void {
        console.log("Finish!")
    }

    error(...args: any[]): void {
        console.log("Error:", args);
    }

    log(...args: any[]): void {
        console.log("Info:", args);
    }

}