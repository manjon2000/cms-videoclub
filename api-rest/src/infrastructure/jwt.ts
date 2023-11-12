import * as jwt from 'jsonwebtoken';
import JWT_CONFIG from '../config/jwt.config';

const {token, hash} = JWT_CONFIG;

export const createToken = (payload: object | any): any => {
    
    return jwt.sign(
        payload,
         token as string , 
        { algorithm: hash }
    );
}

export const decodeToken = (cookie: string) => {
    return jwt.verify(cookie, token, {algorithms: ['HS256']});
}