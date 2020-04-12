import { json } from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';

import { envelopeRouter } from './app/routes';

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

app.use(cors());
app.use(json());

app.use('/api/', envelopeRouter);

const port = process.env.PORT || 6600;
app.listen(port, () => {
  console.log(`Envelope server is listening on port ${port}`);
});