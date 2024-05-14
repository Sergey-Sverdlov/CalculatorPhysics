import {Request, Response} from "express";
import {reqParams} from '../controller/temperatureController'

export type Next = () => Promise<any> | any;

module.exports = function (req: Request<{}, {}, reqParams>, res: Response, next: Next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const temperature = req.body.temp
        if (typeof temperature !== 'number' || Math.abs(temperature) > 100_000) {
            return res.status(500).json({message: "Ошибка при подсчете температуры на стороне сервера"})
        }
        next()
    } catch (e) {
        return res.status(500).json({message: "Ошибка сервера"})
    }
}