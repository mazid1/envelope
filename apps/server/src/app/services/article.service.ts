import { Article } from '../models/article.model';

export const getArticles = async (query, page, limit) => {
  // todo: pagination
  let fields = null;
  if (query.hasOwnProperty('tags')) {
    fields = 'title summary tags';
  }
  try {
    const articles = await Article.find(query, fields);
    return articles;
  } catch (e) {
    console.log(e.message);
    throw Error('Error while Paginating Articles');
  }
};

export const getArticleById = async id => {
  try {
    const article = await Article.findById(id);
    return article;
  } catch (e) {
    console.log(e.message);
    throw Error('Error while fetching Article');
  }
};

export const createArticle = async newArticle => {
  try {
    const article = await newArticle.save();
    return article;
  } catch (e) {
    console.log(e.message);
    throw Error('Error while saving Article');
  }
};
