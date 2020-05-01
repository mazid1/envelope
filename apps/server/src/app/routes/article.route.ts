import * as express from 'express';

import * as ArticleController from '../controllers/article.controller';

const router = express.Router();

router.get('/', ArticleController.getArticles);
router.get('/:slug', ArticleController.getArticleBySlug);

router.post('/', ArticleController.createArticle);

export { router as articleRouter };
