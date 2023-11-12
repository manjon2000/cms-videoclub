import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'manjon',
    password: 'albert12',
    database: 'CMS_videoclub',
    synchronize: true,
    logging: false,
    entities: ['src/domain/**/*.ts','src/domain/**/*/*.ts'],
    subscribers: [],
    migrations: ['src/infrastructure/**/*.migration.ts', 'src/domain/**/*/*.migration.ts'],
    migrationsTableName: 'migrations_table'
});