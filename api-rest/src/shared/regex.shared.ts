
const getCookie = (cookie: string): string => {
    
    const regex = /token=([A-Za-z0-9_.-]+)/;
    const match = cookie.match(regex);
    
    if(match && match[1]) {
        return match[1];
    }

    return '';
}

export default getCookie;