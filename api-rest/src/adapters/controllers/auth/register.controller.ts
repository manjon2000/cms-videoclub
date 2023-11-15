import { Request, Response } from 'express';
import { AppDataSource } from '../../../infrastructure/database/db';
import { User } from '../../../domain/models/user/user.model';
import { exceptionsHttp } from '../../http/exceptions';

export const RegisterController = async (req: Request, res: Response) => {

    const { name, lastName, email, password } = req.body;

    if (name && lastName && email && password) {
        try {
            const isString = (val: any) => typeof val === 'string';

            if (isString(name) && isString(lastName) && isString(email) && isString(password)) {
                const newUser = Object.assign(new User(), { NAME: name, LAST_NAME: lastName, EMAIL: email, PASSWORD: password });
                await AppDataSource.getRepository(User).save(newUser);
                return res.json(exceptionsHttp(200, 'User create successful'));
            }

            return res.json(exceptionsHttp(304, 'Data incorrect'));
        } catch (error) {
            return res.json(exceptionsHttp(304, 'Error of insert user'));
        }
    }

    return res.json(exceptionsHttp(304, 'Data incorrect'));

} 