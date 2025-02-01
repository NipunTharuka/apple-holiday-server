import {Request, Response} from "express";
export const getWelcomeMessage = (req: Request, res: Response) => {
    res.send("Apple Holiday Server Listening on Development Mode" + ` - v${process.env.npm_package_version}`);
};
