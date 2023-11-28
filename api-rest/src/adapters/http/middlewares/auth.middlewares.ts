import { Request, Response, NextFunction } from 'express';
import { exceptionsHttp } from '../exceptions';
import { verifyEmailExists } from '../../../application/services/user/user.service';


export const VerifyEmailMiddeleware =  async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(req.body && req.body.email) {
           
            const verifyEmail = await verifyEmailExists(req.body.email)

            return (!verifyEmail ? next() : res.json(exceptionsHttp(401, 'Mail exist')));
        }

        return res.json(exceptionsHttp(404, 'Required fields'))
    } catch (error) {
        return res.json(500);
    }
}