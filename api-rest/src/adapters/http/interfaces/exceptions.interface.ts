
export interface Exception {
    code: number;
    message: string;
}

export interface ExceptionsEnumInterface {
    200: Exception;
    201: Exception;
    204: Exception;
    400: Exception;
    401: Exception;
    403: Exception;
    404: Exception;
    500: Exception;
}