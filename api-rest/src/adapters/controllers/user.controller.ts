import { User } from "../../domain/models/user/user.model";
import { Request, Response } from 'express';
import { AppDataSource } from "../../infrastructure/database/db";
import { createToken } from "../../infrastructure/jwt";

export interface UserInterface {
    ID: number
    NAME: string
    LAST_NAME: string
    EMAIL: string
    PASSWORD: string
}

export interface HandlerInterface<T> {
    code: number;
    message: string;
    data?: T;
}

export function userIndex(req: Request, res: Response) {

    const { email, password } = req.body;

    if( email && password) {
        
        verifyUser(email, password).then((response) => {
            if(response) {
                getUser(email).then((user) => {
                    res.cookie('token', createToken(user));
                    res.json(user)
                })
            }else {
                res.json(response);
            }
        })
    }
}

export async function userCreate(req: Request): Promise<HandlerInterface<User>> {
    try {

        if (!req) return { code: 404, message: 'Not found params' };

        const { name, lastName, email, password } = req.query;
        const isString = (val: any) => typeof val === 'string';

        if (isString(name) && isString(lastName) && isString(email) && isString(password)) {
            const newUser = Object.assign(new User(), { NAME: name, LAST_NAME: lastName, EMAIL: email, PASSWORD: password });
            await AppDataSource.getRepository(User).save(newUser);
            return { code: 200, message: 'Usuario insertado correctamente' };
        }

        return { code: 304, message: 'Usuario insertado incorrectamente' };


    } catch (error) {
        return { code: 400, message: 'No se ha podido insertar el usuario' };
    }
}
export async function verifyUser(email: string, password: string): Promise<HandlerInterface<User> | boolean> {
    if (!email || !password) {
        return { code: 400, message: 'Datos de usuario incompletos' };
    }
    try {
        const user = await AppDataSource.getRepository(User).findOne({
            where: {
                EMAIL: email,
                PASSWORD: password
            }
        });

        return (!user ? { code: 404, message: 'Usuario no encontrado' } : true );


    } catch (error) {
        return { code: 500, message: 'Error en el servidor' };
    }
}
export async function getUser(email: string): Promise<HandlerInterface<User> | object | null> {
    if(!email) return null;

    try {

        const user = await AppDataSource.getRepository(User).findOne({
            where: { EMAIL: email},
            select: ['ID', 'EMAIL', 'NAME', 'LAST_NAME'],
            
        });

        if(!user) return { code: 404, message: 'Usuario no encontrado' };

        return {user};

    } catch (error) {
        return { code: 500, message: 'Error en el servidor' };
    }
}