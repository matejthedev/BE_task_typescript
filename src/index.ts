import express, {Request, Response} from 'express';
import { User } from './entity/User';
import { AppDataSource } from './data-source';
import { SUCCESS_MESSAGES, ERROR_MESSAGES, CONFIG, STATUS } from './constants';

const app = express();
app.use(express.json());

// GET route to fetch all users
app.get('/users', async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.status(STATUS.OK).json(users);
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: ERROR_MESSAGES.FAILED_GET_USERS });
  }
});

// POST route to create a new user
app.post('/users', async (req, res) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const { email, password, firstName, lastName } = req.body;
    const newUser = userRepository.create({ email, password, firstName, lastName });
    await userRepository.save(newUser);
    res.status(STATUS.CREATED).json(newUser);
  } catch (error) {
    res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: ERROR_MESSAGES.FAILED_CREATE_USER });
  }
});

app.listen(process.env.SERVER_PORT , () => {
  console.log(SUCCESS_MESSAGES.SERVER_STARTED(Number(process.env.SERVER_PORT) || CONFIG.FALLBACK_SERVER_PORT));
});
