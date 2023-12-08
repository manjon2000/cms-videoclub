export interface UserPhoto {
    user_id:        string;
    multimedia_id:  string;
    created_at:     Date;
    updated_at?:    Date;
    deleted_at?:    Date;
}