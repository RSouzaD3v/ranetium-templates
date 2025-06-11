import { Response, Request, NextFunction } from "express";

export const RanetiumMiddleware = (req: Request, _: Response, next: NextFunction) => {
    req.middleware = {
        messageMid: "Hello by Middleware!"
    };

    next();
}