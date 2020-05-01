import { Article } from '../models/article.model';
import * as ArticleService from '../services/article.service';

export const getArticles = async (req, res) => {
  // todo: validation
  const query = req.query ? req.query : {};
  try {
    const articles = await ArticleService.getArticles(query);
    return res.status(200).send(articles);
  } catch (e) {
    return res.status(400).send(null);
  }
};

export const getArticleBySlug = async (req, res) => {
  // todo: validation
  try {
    const article = await ArticleService.getArticleBySlug(req.params.slug);
    return res.status(200).send(article);
  } catch (e) {
    if (e.message === '404') {
      res.status(404).send({ error: true, status: 404, message: 'Not Found' });
    }
    res.status(400).send({ error: true, status: 400, message: 'Bad Request' });
  }
};

export const createArticle = async (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
    summary: req.body.summary,
    published: req.body.published,
    publishedAt: req.body.publishedAt
      ? req.body.publishedAt
      : req.body.published
      ? Date.now()
      : null,
    tags: req.body.tags
  });

  try {
    const article = await ArticleService.createArticle(newArticle);
    return res.status(201).send(article);
  } catch (e) {
    res.status(400).send({ error: true, status: 400, message: 'Bad Request' });
  }
};
