class StylizedLogger {
    private styles = {
        reset: "\x1b[0m",
        fg: {
            black: "\x1b[30m",
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m",
            blue: "\x1b[34m",
            magenta: "\x1b[35m",
            cyan: "\x1b[36m",
            white: "\x1b[37m"
        },
        bg: {
            black: "\x1b[40m",
            red: "\x1b[41m",
            green: "\x1b[42m",
            yellow: "\x1b[43m",
            blue: "\x1b[44m",
            magenta: "\x1b[45m",
            cyan: "\x1b[46m",
            white: "\x1b[47m"
        }
    };

    log(message: string, fgColor: keyof typeof this.styles.fg, bgColor: keyof typeof this.styles.bg = 'black'): void {
        console.log(`${this.styles.fg[fgColor]}${this.styles.bg[bgColor]}%s${this.styles.reset}`, message);
    }

    header(message: string): void {
        this.log(message, 'white', 'blue');
    }

    error(message: string): void {
        this.log(message, 'white', 'red');
    }

    body(message: string): void {
        this.log(message, 'black', 'white');
    }
}

export default StylizedLogger;


// import StylizedLogger from './StylizedLogger.js';

// const logger = new StylizedLogger();

// logger.log('This is a red message with green background', 'red', 'green');
// logger.log('This is a bright blue message', 'blue');