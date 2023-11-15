import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({name: 'franchises'})
export class Franchises extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code_postal', type: 'varchar', length: 5 })
    code_postal: string;

    @Column({ name: 'city', type: 'varchar', length: 100 })
    city: string;

    @Column({ name: 'address', type: 'varchar', length: 255 })
    address: string;

    @Column({ name: 'franchise_number', type: 'integer' })
    franchise_number: number;

}