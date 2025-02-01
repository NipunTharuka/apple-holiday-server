import {createTaskRepo, deleteTaskRepo, getPagedTasksRepo, updateTaskRepo} from "../data-access/task.repo";
import {createTaskRef} from "../util/referenceNumbers";

export const createTaskService = async (data: any) => {
    try {
        data.refNo = await createTaskRef();
        const result = await createTaskRepo(data);
        return result;
    } catch (e) {
        throw e;
    }
};
export const getPagedTasksService = async (data: any) => {
    try {
        return await getPagedTasksRepo(data);
    } catch (e) {
        throw e;
    }
};

export const deleteTaskService = async (id: any) => {
    try {
        return await deleteTaskRepo(id);
    } catch (e) {
        throw e;
    }
};

export const updateTaskService = async (data: any) => {
    try {
        return await updateTaskRepo(data._id, data);
    } catch (e) {
        throw e;
    }
};
