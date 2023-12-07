import { Mimetype } from "../../../shared/interfaces/mimetype.interface";

export interface Multimedia {
    id:             string;
    user_id:        string;
    name:           string;
    mimetype:       Mimetype;
    created_at:     Date;
    updated_at?:    Date;
    deleted_at?:    Date;
}