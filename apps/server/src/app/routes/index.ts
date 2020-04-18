import * as express from 'express';

import { ApiConstant } from '@envelope/constants';

import { articleRouter } from './article.route';
import { categoryRouter } from './category.route';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to envelope-server!'));
router.use('/article', articleRouter);

router.use(`/${ApiConstant.categories}`, categoryRouter);

export { router as envelopeRouter };
