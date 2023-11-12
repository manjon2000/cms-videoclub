import * as jose from 'jose'
import getCookie from './cookies';

export const decodeToken = async (): Promise<any> => {
    const token = getCookie(document.cookie);

    return (
        token ? 
            jose.decodeJwt(token)
            : null 
        );
};

