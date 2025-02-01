import {getWelcomeMessage} from "../controllers";
import {taskRouter} from "./task.routes";

export const routes = ((app: any) => {
    app.get("/", getWelcomeMessage);
    app.use("/api", taskRouter);
});
