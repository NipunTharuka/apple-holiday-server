import { Router } from "express";
import {
    createTaskController,
    deleteTasksController,
    getPagedTasksController,
    updateTaskController
} from "../controllers/task.controller";


export const taskRouter = Router();

taskRouter.post("/tasks", createTaskController);
taskRouter.post("/paged-tasks", getPagedTasksController);
taskRouter.delete("/tasks/:id", deleteTasksController);
taskRouter.put("/tasks", updateTaskController);

