import * as dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import express from 'express';

import { routes } from '../../routes';
import { ServerError } from '../errors/ServerError';

export const app = express();

app.use(express.json());
app.use(routes)
app.use(ServerError)
