import mongoose from "mongoose"
import {log} from "../util/logger";

export const initDatabase = async () => {
    try {
        const dbPath = "mongodb+srv://easytravelappnipun:nuLV9MTVegi8F3QS@easytravelapp.jcifyj4.mongodb.net/apple-holiday?retryWrites=true&w=majority&appName=EasyTravelApp"
        await mongoose.connect(dbPath)
        log.info("MongoDB Atlas Connected")
    } catch (e) {
        log.error(`Database Connection Failed - ${JSON.stringify(e)}`)
    }
}
