import {Request, Response} from "express";
import {reqParams} from '../controller/pressureController'

export type Next = () => Promise<any> | any;

module.exports = function (req: Request<{}, {}, reqParams>, res: Response, next: Next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const pressure = req.body.pressure
        if (typeof pressure !== 'number' || Math.abs(pressure) > 100_000) {
            return res.status(500).json({message: "Ошибка при подсчете давления на стороне сервера"})
        }
        next()
    } catch (e) {
        return res.status(500).json({message: "Ошибка сервера"})
    }
}