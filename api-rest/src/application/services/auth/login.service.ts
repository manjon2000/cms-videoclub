import { createToken } from "../../../infrastructure/jwt";
import { getUser, verifyUser } from "../../../adapters/controllers/user.controller";

/**
 * export const LoginService = (email: string, password: string) => {

    try {
        verifyUser(email, password).then((response) => {
            if (response) {
                getUser(email).then((user) => {
                    res.cookie('token', createToken(user));
                    res.json(user)
                })
            } else {
                return response;
            }
        })
    }catch (error) {
        return error;
    }
}

 */