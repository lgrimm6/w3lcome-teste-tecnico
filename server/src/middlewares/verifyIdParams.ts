import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const verifyIdParams = (req: Request, res: Response, next: NextFunction): void => {
    const regexUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
    const taskId = req.params.id;
    const isRegex = regexUuid.test(taskId);
    if (!isRegex) {
        throw new AppError(400, "id must be a valid uuid");
    }

    return next();
};

export default verifyIdParams;