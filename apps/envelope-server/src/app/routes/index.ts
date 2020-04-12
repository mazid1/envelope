import * as express from 'express';

import { articleRouter } from './article.route';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to envelope-server!'));
router.use('/article', articleRouter);

export { router as envelopeRouter };
