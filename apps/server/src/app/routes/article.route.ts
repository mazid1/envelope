import * as express from 'express';

import * as ArticleController from '../controllers/article.controller';

const router = express.Router();

router.get('/', ArticleController.getArticles);
router.get('/:id', ArticleController.getArticleById);

router.post('/', ArticleController.createArticle);

export { router as articleRouter };
