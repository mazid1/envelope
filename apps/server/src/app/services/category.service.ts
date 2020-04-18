import { Category } from '../models/category.model';

export const getCategories = async (query, page, limit) => {
  // todo: pagination
  try {
    const categories = await Category.find(query);
    return categories;
  } catch (e) {
    console.error(e);
    throw Error('Error while fetching Categoires');
  }
};

export const getCategoryById = async id => {
  try {
    const category = await Category.findById(id);
    return category;
  } catch (e) {
    console.error(e);
    throw Error('Error while fetching Category');
  }
};

export const createCategory = async newCategory => {
  try {
    if (Array.isArray(newCategory)) {
      const categories = await Category.insertMany(newCategory);
      return categories;
    } else {
      const category = await newCategory.save();
      return category;
    }
  } catch (e) {
    console.error(e);
    throw Error('Error while saving Category');
  }
};
