import { json } from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';

dotenv.config();
// import { router } from './routes';

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
app.get('/api', (req, res) => {
  res.send('Welcome to envelope-server!');
});
// app.use('/api/', router);

const port = process.env.PORT || 6600;
app.listen(port, () => {
  console.log(`Envelope server is listening on port ${port}`);
});
