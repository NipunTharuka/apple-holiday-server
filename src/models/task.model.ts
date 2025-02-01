import {Document, model, Schema} from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import {SETTINGS} from "../constants/commons.settings";

export interface ITask extends Document {
    _id: string;
    refNo: string;
    title: string;
    description: string;
    priority: string;
    deadline: any;
    status: string;
    active: boolean;
    archived: boolean;
    createdAt: any;
    updatedAt: any;
    __v: any;
}

export const TaskSchema = new Schema<ITask>({
    refNo: {
        type: String,
    },
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    priority: {
        type: String,
        enum: [
            SETTINGS.PRIORITY.LOW,
            SETTINGS.PRIORITY.MEDIUM,
            SETTINGS.PRIORITY.HIGH,
        ],
    },
    deadline: {
        type: Date
    },
    status: {
        type: String,
        enum: [
            SETTINGS.STATUS.NOT_STARTED,
            SETTINGS.STATUS.IN_PROGRESS,
            SETTINGS.STATUS.COMPLETED,
        ],
    },
    active: {
        type: Boolean,
        default: true,
    },
    archived: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});


TaskSchema.plugin(uniqueValidator,  { message: "{PATH} already in use" });

export const Task = model<ITask>("Admin", TaskSchema);
