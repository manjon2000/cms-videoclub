import { Request, Response } from 'express';
import { getUser, verifyUser } from '../../../application/services/user/user.service';
import { exceptionsHttp } from '../../http/exceptions';
import { createToken } from '../../../infrastructure/jwt';

export const LoginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (email && password) {

        try {
            const isValidUser = await verifyUser(email, password);

            if (!isValidUser) {
                return res.json(exceptionsHttp(404, 'User Invalid or Credentials'));
            }

            const userData = await getUser(email);

            if (userData) {
                res.cookie('token', createToken(userData));
                return res.json(exceptionsHttp(200));
            }

        } catch (error) {
            return res.json({ code: 500, message: error });
        }
    }

    return res.json(exceptionsHttp(400));
}