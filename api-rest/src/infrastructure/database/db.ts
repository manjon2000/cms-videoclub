import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'cms_videoclub',
    synchronize: true,
    logging: true,
    entities: ['src/domain/**/*.ts','src/domain/**/*/*.ts'],
    subscribers: [],
    migrations: ['src/infrastructure/**/*.migration.ts', 'src/domain/**/*/*.migration.ts'],
    migrationsTableName: 'migrations_table'
});