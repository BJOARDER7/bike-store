import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  let a = 10;
  res.send(a);
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Hello Phero site!');
});

export default app;
