import { QueryParam } from '@envelope/constants';
import { PagedResponse } from '@envelope/models';

import { Article } from '../models/article.model';

/**
 * Returns default fields of the list of Articles.
 * Default fields are Title, Summary and Tags
 * @param query: contains query from client
 * @param page: page number
 * @param limit: max size of page
 */
export const getArticles = async (query, page, limit) => {
  console.log('Query at getArticles: ', query);

  let fields = 'title summary tags'; // default fields for list of articles
  if (query.hasOwnProperty(QueryParam.FIELDS)) {
    fields = query[QueryParam.FIELDS];
    delete query[QueryParam.FIELDS];
  }

  try {
    const length: number = await Article.countDocuments(query);
    const articles = await Article.find(query, fields, {
      skip: +page * +limit,
      limit: +limit
    });

    const pagedResponse = new PagedResponse({
      length,
      contents: articles,
      pageIndex: +page,
      pageSize: +limit,
      pages: Math.ceil(length / +limit)
    });

    return pagedResponse;
  } catch (e) {
    console.log(e.message);
    throw Error('Error while Paginating Articles');
  }
};

/**
 * Returns all fields of the matched Article
 * @param id: id of the Article
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
