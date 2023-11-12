import 'dotenv/config';

export interface JwtConfigInterface {
    token: string;
    hash: any;
}

const JWT_CONFIG: JwtConfigInterface = {
    token: `${process.env.JWT_TOKEN}`,
    hash: process.env.JWT_HASH
}


export default JWT_CONFIG;