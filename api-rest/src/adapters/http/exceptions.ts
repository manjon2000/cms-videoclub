import { ExceptionsEnumInterface, Exception } from './interfaces/exceptions.interface';

const ExceptionsEnum: ExceptionsEnumInterface = {
    200: {
        code: 200,
        message: 'The request was successful.'
    },

    201: {
        code: 201,
        message: 'The request has been fulfilled and resulted in the creation of a new resource.'
    },
    204: {
        code: 204,
        message: 'The request has been successfully processed, but there is no content to return'
    },
    400: {
        code: 400,
        message: 'The server could not understand or process the request due to a client error.'
    },
    401: {
        code: 401,
        message: 'Authentication is required, or the provided credentials are not valid.'
    },
    403: {
        code: 403,
        message: 'The server understood the request but refuses to authorize it.'
    },
    404: {
        code: 404,
        message: 'The requested resource could not be found on the server.'
    },
    500: {
        code: 500,
        message: 'The server encountered an unexpected condition that prevented it from fulfilling the request.'
    }

};

export const exceptionsHttp = (code: number, message?: string): Exception => {
    if (!message) {
        const exception = (ExceptionsEnum as unknown as Record<number, Exception>)[code];
        return exception;
    } else {
        return {
            code,
            message,
        };
    }
};



