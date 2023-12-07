export interface User {
    id:             string;
    role_id:        string;
    name:           string;
    last_name:      string;
    email:          string;
    password:       string;
    phone:          number;
    created_at:     Date;
    updated_at?:    Date;
}