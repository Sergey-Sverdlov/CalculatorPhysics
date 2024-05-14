import {Request, Response} from "express";
import {reqParams} from '../controller/consumptionController'

export type Next = () => Promise<any> | any;

module.exports = function (req: Request<{}, {}, reqParams>, res: Response, next: Next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const consumption = req.body.consumption
        if (typeof consumption !== 'number' || Math.abs(consumption) > 100_000) {
            return res.status(500).json({message: "Ошибка при подсчете расхода на стороне сервера"})
        }
        next()
    } catch (e) {
        return res.status(500).json({message: "Ошибка сервера"})
    }
}