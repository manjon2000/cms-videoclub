import "reflect-metadata"
import app from "./adapters/routes/app"
import { AppDataSource } from "./infrastructure/database/db"

async function main() {

    try {
        await AppDataSource.initialize();
        app.listen(4000, () =>  {
            console.log('Service is running http://localhost:4000/')
        })
    } catch (error) {
        console.log(error)
    }

}

main();