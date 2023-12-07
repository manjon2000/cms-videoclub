import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role_id', type: 'varchar', length: 255})
  role_id: string;

  @Column({name: 'name', type: 'varchar', length: 255})
  name: string;

  @Column({name: 'last_name', type: 'varchar', length: 255})
  last_name: string;

  @Column({name: 'email', type: 'varchar', length: 255})
  email: string;

  @Column({name: 'password', type: 'varchar', length: 255})
  password: string;

  @Column({name: 'phone', type: 'number', length: 255})
  phone: number;

  @Column({name: 'create_at', type: 'timestamp'})
  create_at: Date;

  @Column({name: 'updated_at', type: 'timestamp'})
  updated_at: Date;
}
