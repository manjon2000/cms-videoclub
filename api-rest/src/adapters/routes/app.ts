import express from 'express';
import morgan from 'morgan';
import cors from 'cors';



import  { router }  from './web.routing';

const app = express()
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
app.use(express.json());
app.use(router);


export default app;