import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_photo' })

class UserPhoto extends BaseEntity {
    
    @PrimaryColumn()
    user_id: string;
    
    @Column({name: 'multimedia_id', type: 'varchar', length: 36 })
    multimedia_id: string;

    @Column({name: 'create_at', type: 'timestamp'})
    create_at: Date;

    @Column({name: 'updated_at', type: 'timestamp'})
    updated_at: Date;

    @Column({name: 'deleted_at', type: 'timestamp'})
    deleted_at: Date;
}