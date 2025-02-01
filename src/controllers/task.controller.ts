import {log} from "../util/logger";
import {createTaskService, deleteTaskService, getPagedTasksService, updateTaskService} from "../services/task.service";
import {createLogger} from "bunyan";

export const createTaskController = async (req: any, res: any) => {
    log.info("Creating task started");
    try {
        const data = await createTaskService(req.body);
        res.send(data);
        log.info("Creating task completed");
    } catch (e) {
        log.error(JSON.stringify(e));
        return res.status(400).send(e);
    }
};
export const getPagedTasksController = async (req: any, res: any) => {
    log.info("Getting paged tasks");
    try {
        const data = await getPagedTasksService(req.body);
        res.send(data);
        log.info("Getting paged tasks completed");
    } catch (e) {
        log.error(JSON.stringify(e));
        return res.status(400).send(e);
    }
};
export const deleteTasksController = async (req: any, res: any) => {
    log.info("Deleting task started");
    try {
        const data = await deleteTaskService(req.params.id);
        res.send(data);
        log.info("Deleting task completed");
    } catch (e) {
        log.error(JSON.stringify(e));
        return res.status(400).send(e);
    }
};
export const updateTaskController = async (req: any, res: any) => {
    log.info("Updating task started");
    try {
        const data = await updateTaskService(req.body);
        res.send(data);
        log.info("Updating task completed");
    } catch (e) {
        log.error(JSON.stringify(e));
        return res.status(400).send(e);
    }
};
