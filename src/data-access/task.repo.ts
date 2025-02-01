import {Task} from "../models/task.model";

export const createTaskRepo = (data: any) => {
    return new Task(data).save();
};

export const findLatestTaskRepo = async (filters? : any) => {
    return Task.find(filters).sort({ createdAt: -1 }).limit(1).exec();
};
export const getPagedTasksRepo = async (data?: any) => {
    const {pageIndex, pageSize, sortField, sortOrder, filters} = data;
    let filterFields = {};
    let priorityFields = {};
    if (filters?.searchText) {
        filterFields = {
            text: {
                $regex: filters.searchText ? filters.searchText : "",
                $options: "i",
            },
        };
    }
    if (filters?.priority) {
        priorityFields = {
            priority: filters?.priority,
        };
    }
    return Task.aggregate([
        {
            $match: {
                archived: false,
                active: true
            }
        },
        {
            $project: {
                _id: 1,
                refNo: 1,
                title: 1,
                description: 1,
                priority: 1,
                deadline: 1,
                status: 1,
                createdAt: 1,
            },
        },
        {
            $match: {
                ...filterFields,
                ...priorityFields
            },
        },
        {
            $facet: {
                metadata: [{$count: "total"}, {$addFields: {page: pageIndex || 1}}],
                data: [
                    {
                        $sort: {
                            [sortField || "createdAt"]: sortOrder || -1,
                        },
                    },
                    {$skip: ((pageSize || 10) * ((pageIndex || 1) - 1)) || 0},
                    {$limit: pageSize || 10},
                ],
            },
        },
    ]).exec();
};
export const deleteTaskRepo = async (id : any) => {
    return Task.findOneAndUpdate({_id: id}, {$set: {archived: true}}).exec();
};

export const updateTaskRepo = async (id : any, data: any) => {
    return Task.findOneAndUpdate({_id: id}, {$set: {...data}}).exec();
};
