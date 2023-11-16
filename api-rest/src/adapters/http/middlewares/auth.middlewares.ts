import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../../../infrastructure/database/db';
import { User } from '../../../domain/user/user.model';
import { exceptionsHttp } from '../exceptions';


export const VerifyEmailMiddeleware =  async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(req.body &&  req.body.email) {
            const verify = await AppDataSource.getRepository(User).findOne({
                where: {
                    EMAIL: req.body.email
                }
            })

            return (!verify ? next() : res.json(exceptionsHttp(401, 'Mail exist')));
        }

        return res.json(exceptionsHttp(404, 'Required fields'))
    } catch (error) {
        return res.json(500);
    }
}