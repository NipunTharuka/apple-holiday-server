import bodyParser from "body-parser";
import {log} from "./util/logger";
import cors from "cors";
import express from "express";
import {initDatabase} from "./data-access";
import {routes} from "./routes";

const app = express();
const port = process.env.port || 4000;

// Database initiation
initDatabase();

// Server configuration
app.use(bodyParser.urlencoded({limit: "1mb", extended: true}));
app.use(bodyParser.json({limit: "1mb"}));
app.use(cors());

// Routes initialization
routes(app);

app.listen(port, () => {
    log.info(`Apple Holiday API Server v${process.env.npm_package_version} started on PORT ${port}`);
});
