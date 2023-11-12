import { IncomingHttpHeaders } from "http";
import { exceptionsHttp } from "../../../adapters/http/exceptions";
import { User } from "../../../domain/models/user/user.model";
import { AppDataSource } from "../../../infrastructure/database/db";

export interface HandlerInterface {
    code: number;
    message: string;
}

export async function verifyUser(email: string, password: string): Promise<HandlerInterface | boolean> {
    if (!email || !password) {
        return exceptionsHttp(404, 'Invalid credentials');
    }
    try {
        const user = await AppDataSource.getRepository(User).findOne({
            where: { EMAIL: email, PASSWORD: password }
        });

        return (!user ? false : true);


    } catch (error) {
        return exceptionsHttp(500);
    }
}

export async function getUser(email: string): Promise<HandlerInterface | object | null> {
    if (!email) return null;

    try {

        const user = await AppDataSource.getRepository(User).findOne({
            where: { EMAIL: email },
            select: ['ID', 'EMAIL', 'NAME', 'LAST_NAME'],

        });

        if (!user) return exceptionsHttp(404, 'User not found');

        return { user };

    } catch (error: any) {
        return exceptionsHttp(500, error?.message as string);
    }
}