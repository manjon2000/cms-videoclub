import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Mimetype } from '../../shared/interfaces/mimetype.interface';

@Entity({ name: 'multimedia' })

export class Multimedia extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'user_id', type: 'varchar', length: 36})
    user_id: string;

    @Column({ name: 'name', type: 'varchar', length: 255})
    name: string;

    @Column({ name: 'mimetype', type: 'enum'})
    mimetype: Mimetype;

    @Column({name: 'create_at', type: 'timestamp'})
    create_at: Date;

    @Column({name: 'updated_at', type: 'timestamp'})
    updated_at: Date;

    @Column({name: 'deleted_at', type: 'timestamp'})
    deleted_at: Date;


}
