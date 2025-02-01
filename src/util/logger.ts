import bunyan from "bunyan";

export const log = bunyan.createLogger({
    name: "apple-holiday-backend",
});
