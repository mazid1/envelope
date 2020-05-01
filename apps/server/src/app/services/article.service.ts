import { DefaultPageInfo, QueryParam } from '@envelope/constants';
import { PagedResponse, QueryModel } from '@envelope/models';

import { Article } from '../models/article.model';

/**
 * Returns default fields of the list of Articles.
 * Default fields are Title, Summary and Tags
 * @param query: contains query from client
 */
export const getArticles = async (query): Promise<PagedResponse<any>> => {
  console.log('Query at getArticles: ', query);

  const formattedQuery: QueryModel = formatQuery(query);

  try {
    const totalCount: number = await Article.countDocuments(formattedQuery.filter);
    const articles = await Article.find(formattedQuery.filter, formattedQuery.projection, {
      skip: formattedQuery.options.page * formattedQuery.options.limit,
      limit: formattedQuery.options.limit,
      sort: formattedQuery.options.sort
    });

    const pagedResponse = new PagedResponse<any>({
      pageIndex: formattedQuery.options.page,
      pageSize: formattedQuery.options.limit,
      results: articles,
      totalCount,
      totalPages: Math.ceil(totalCount / formattedQuery.options.limit)
    });

    return pagedResponse;
  } catch (e) {
    console.log(e.message);
    throw Error('Error while Paginating Articles');
  }
};

/**
 * Returns all fields of the matched Article
 * @param slug: unique url of the Article
 */
export const getArticleBySlug = async slug => {
  try {
    const article = await Article.findOne({ slug });
    if (!article) {
      throw Error('404');
    }
    return article;
  } catch (e) {
    console.log(e.message);
    if (e.message === '404') {
      throw Error(e.message);
    }
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

/**
 * Take the query from client and return it into
 * { filter, projection, options } this form
 * filter: search filter
 * projection: list of fields name
 * options: page information {page, limit}
 * @param query query from string from client
 */
const formatQuery = (query: any): QueryModel => {
  let projection = 'title summary tags slug publishedAt'; // default fields for list of articles
  if (query.hasOwnProperty(QueryParam.FIELDS)) {
    projection = query[QueryParam.FIELDS];
    delete query[QueryParam.FIELDS];
  }

  let limit = DefaultPageInfo.PAGE_SIZE; // default limit
  if (query.hasOwnProperty(QueryParam.LIMIT)) {
    limit =
      +query[QueryParam.LIMIT] >= DefaultPageInfo.MIN_PAGE_SIZE &&
      +query[QueryParam.LIMIT] <= DefaultPageInfo.MAX_PAGE_SIZE
        ? +query[QueryParam.LIMIT]
        : limit;
    delete query[QueryParam.LIMIT];
  }

  let page = DefaultPageInfo.PAGE_INDEX; // default page index
  if (query.hasOwnProperty(QueryParam.PAGE)) {
    page =
      +query[QueryParam.PAGE] >= DefaultPageInfo.MIN_PAGE_INDEX
        ? +query[QueryParam.PAGE]
        : DefaultPageInfo.MIN_PAGE_INDEX;
    delete query[QueryParam.PAGE];
  }

  let sort = '-publishedAt -updatedAt -createdAt';
  if (query.hasOwnProperty(QueryParam.SORT)) {
    sort = query[QueryParam.SORT];
    delete query[QueryParam.SORT];
  }

  const options = { page, limit, sort };

  return { filter: query, projection, options };
};
