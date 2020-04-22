import * as express from 'express';

import * as CategoryController from '../controllers/category.controller';

const router = express.Router();

router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.getCategoryById);

router.post('/', CategoryController.createCategory);

export { router as categoryRouter };
