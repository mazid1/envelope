import { Category } from '../models/category.model';
import * as CategoryService from '../services/category.service';

export const getCategories = async (req, res) => {
  // todo: validation
  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;
  try {
    const categories = await CategoryService.getCategories({}, page, limit);
    return res.status(200).send(categories);
  } catch (e) {
    return res.status(400).send(null);
  }
};

export const getCategoryById = async (req, res) => {
  // todo: validation
  try {
    const category = await CategoryService.getCategoryById(req.params.id);
    return res.status(200).send(category);
  } catch (e) {
    res.status(400).send(null);
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    return res.status(201).send(category);
  } catch (e) {
    res.status(400).send(null);
  }
};
