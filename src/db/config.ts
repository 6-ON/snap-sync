import { Connection, connection } from "mongoose";
import { logger } from "../utils";
import { connect } from "mongoose";

export const db: Connection = connection;

db.on("error", (err) => {
	logger.error(err);
});
db.once("open", () => {
	logger.info("Connected to MongoDB");
});
db.once("close", () => {
	logger.info("Closed connection to MongoDB");
});

// ------Connect to MongoDB------
const { MONGODB_URI, MONGODB_URI_TEST, RUNTIME_MODE } = process.env;

(async () => {
	await connect(
		RUNTIME_MODE?.toLocaleUpperCase() === "TEST"
			? MONGODB_URI_TEST!
			: MONGODB_URI!,
	);
})();
