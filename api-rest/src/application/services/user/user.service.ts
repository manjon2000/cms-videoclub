import { exceptionsHttp } from "../../../adapters/http/exceptions";
import { User } from "../../../domain/user/user.model";
import { AppDataSource } from "../../../infrastructure/database/db";
import { HandlerInterface } from "../../interfaces/handler.interface";

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