import express, { Request, Response } from 'express';
// import dotenv from 'dotenv';
// dotenv.config();

const app = express();

const port = process.env.PORT || 6001;
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'this is home page' });
});
app.listen(port, () => {
  console.log(`app is listening is the port address of ${port}`);
});
