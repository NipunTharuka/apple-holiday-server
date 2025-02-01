import {findLatestTaskRepo} from "../data-access/task.repo";

export const createTaskRef = async () => {
    let tasks: any[];
    let taskNo: string;
    tasks = await findLatestTaskRepo();
    if (tasks.length > 0) {
        taskNo = String(Number(tasks[0]?.refNo?.toString().slice(3)) + 1).padStart(5, "0");
    } else {
        taskNo = String(1).padStart(5, "0");
    }
    return `AHT${taskNo}`;
};

