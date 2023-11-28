import * as jwt from 'jsonwebtoken';
import JWT_CONFIG from '../config/jwt.config';

const { token, hash } = JWT_CONFIG;

export const createToken = (payload: object | any): any => {

    return jwt.sign(
        payload,
        token as string,
        { algorithm: hash, expiresIn: Math.floor(Date.now() / 1000) + 86400 * 24 }
    );
}

export const VerifyToken = (cookie: string): Promise<boolean> => {

    return new Promise((resolve, reject) => {
        jwt.verify(cookie, token, { algorithms: ['HS256'] }, (err,decode) => {
        
            if(err) {
                resolve(false);
            }
    
            resolve(true);
        });
    });
}