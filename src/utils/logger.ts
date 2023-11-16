import winston, { Logger, createLogger, format } from "winston";
const logFormat = format.combine(
	format.label({ label: "LOGGER" }),
	format.timestamp(),
	format.printf(
		(info) =>
			`${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`,
	),
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
	],
});
