import express, { Request, Response } from 'express';
import cors from "cors";
import { getAllUsers, getUser } from './controllers/UserController';

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(cors());
app.get('/', async (request: Request, response: Response) => response.send("TEST13"));
app.get('/users', async (request: Request, response: Response) => response.send(await getAllUsers()));
app.get('/user/:id', async (request: Request, response: Response) => response.send(await getUser(request.params["id"])));
app.listen(port, () => console.log(`Server is listenings at http://localhost:${port}`));
