export class FfmpegBuilder {
    private inputPath: string;
    private options: Map<string, string> = new Map();
    private outputPath: string;

    constructor() {
        this.options.set("-c:v", "libx264");
    }

    input(inputPath: string): this {
        this.inputPath = inputPath;
        return this;
    }

    setVideoSize(width: number, height: number): this {
        this.options.set("-s", `${width}x${height}`);
        return this;
    }

    output(outputPath: string): string[] {
        if (!this.inputPath) throw new Error("Input doesn't set!");
        const args: string[] = ["-i", this.inputPath];
        this.options.forEach((val, idx) => {
            args.push(idx);
            args.push(val);
        });
        args.push(outputPath);
        return args;
    }
}