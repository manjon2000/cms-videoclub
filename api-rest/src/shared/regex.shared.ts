
const getCookie = (cookie: string): string => {

    if(cookie.length <= 0) return '';
    
    const regex = /token=([A-Za-z0-9_.-]+)/;
    const match = cookie.match(regex);
    
    if(match && match[1]) {
        return match[1];
    }

    return '';
}

export default getCookie;