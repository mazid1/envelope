import { QueryParam } from '@envelope/constants';

import { Article } from '../models/article.model';

/**
 * Returns default fields of the list of Articles.
 * Default fields are Title, Summary and Tags
 * @param query
 * @param page
 * @param limit
 */
export const getArticles = async (query, page, limit) => {
  // todo: pagination
  console.log('Query at getArticles: ', query);

  let fields = 'title summary tags'; // default fields for list of articles
  if (query.hasOwnProperty(QueryParam.FIELDS)) {
    fields = query[QueryParam.FIELDS];
    delete query[QueryParam.FIELDS];
  }

  try {
    const articles = await Article.find(query, fields);
    return articles;
  } catch (e) {
    console.log(e.message);
    throw Error('Error while Paginating Articles');
  }
};

/**
 * Returns all fields of the matched Article
 * @param id
 */
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
