import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'usuario' }) // Especifica el nombre de la tabla
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID: number; // Debe coincidir con el nombre de la columna en la tabla

  @Column({ name: 'NAME', type: 'varchar', length: 50 })
  NAME: string;

  @Column({ name: 'LAST_NAME', type: 'varchar', length: 50 })
  LAST_NAME: string;

  @Column({ name: 'EMAIL', type: 'varchar', length: 100 })
  EMAIL: string;

  @Column({ name: 'PASSWORD', type: 'varchar', length: 100 })
  PASSWORD: string;
}
