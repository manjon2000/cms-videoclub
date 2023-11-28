import { Request, Response, NextFunction } from "express"
import { VerifyToken } from "../../../infrastructure/jwt"
import getCookie from "../../../shared/regex.shared"
import { exceptionsHttp } from "../exceptions";


export const JWTVerifyMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    if (!req.headers.cookie) {
        return res.json(exceptionsHttp(401))
    }
    const verify = await VerifyToken(getCookie(req.headers.cookie as string));

    return (
            verify
            ? next()
            : res.json(exceptionsHttp(401, 'Token not valid.'))
    );

}