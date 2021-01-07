import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';
import { db } from './db';

const app = express();

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
})

const start = async () => {
    await db.connect('mongodb://localhost:27017');
    console.log('Connected to database');
    await app.listen(8080);
    console.log('Server is listening on port 8080');
}

start();
