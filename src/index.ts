import express from 'express';
import { SUCCESS_MESSAGES, CONFIG } from './constants';
import users from './routes/users';
import jokes from './routes/jokes';

const app = express();
app.use(express.json());
app.use('/users', users);
app.use('/jokes', jokes);

app.listen(process.env.SERVER_PORT , () => {
  console.log(SUCCESS_MESSAGES.SERVER_STARTED(Number(process.env.SERVER_PORT) || CONFIG.FALLBACK_SERVER_PORT));
});
