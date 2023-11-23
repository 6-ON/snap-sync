import winston, { Logger, createLogger, format } from "winston";
const logFormat = format.combine(
	format.timestamp(),
	format.simple(),
	format.prettyPrint(),
);
export const logger: Logger = createLogger({
	format: logFormat,
	transports: [
		new winston.transports.File({
			filename: "logs/error.log",
			level: "error",
		}),
		new winston.transports.File({
			filename: "logs/app.log",
			level: "info",
		}),
		new winston.transports.File({
			filename: "logs/debug.log",
			level: "debug",
		}),
	],
});
