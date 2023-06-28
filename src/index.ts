import express from 'express';
import { SUCCESS_MESSAGES, CONFIG } from './constants';
import auth from './routes/auth';

const app = express();
app.use(express.json());
app.use('/', auth);

app.listen(process.env.SERVER_PORT , () => {
  console.log(SUCCESS_MESSAGES.SERVER_STARTED(Number(process.env.SERVER_PORT) || CONFIG.FALLBACK_SERVER_PORT));
});
