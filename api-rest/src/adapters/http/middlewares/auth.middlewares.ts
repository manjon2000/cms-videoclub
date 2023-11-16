import { Request, Response, NextFunction } from 'express';
import { verifyUser } from '../../../application/services/user/user.service';
import { AppDataSource } from '../../../infrastructure/database/db';
import { User } from '../../../domain/user/user.model';
import { exceptionsHttp } from '../exceptions';


export const VerifyEmailMiddeleware =  async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body.email;
        if(email) {
            const verify = await AppDataSource.getRepository(User).find({
                where: {
                    EMAIL: email
                }
            })

            return (verify ? next : res.json(exceptionsHttp(401, 'Mail exist')));
        }

        return res.json()
    } catch (error) {
        return res.json(500);
    }
}