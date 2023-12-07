import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'roles' })

export class Roles extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'role', type: 'varchar', length: 20 })
    role: string;

    @Column({ name: 'create_at', type: 'timestamp' })
    create_at: Date;

    @Column({ name: 'updated_at', type: 'timestamp' })
    updated_at: Date;

}