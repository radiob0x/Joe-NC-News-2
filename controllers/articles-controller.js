const {
  fetchArticleByArticleId,
  updateVotes,
  fetchArticles
} = require('../models/articles-model');

exports.sendArticleByArticleId = (req, res, next) => {
  const { article_id } = req.params;
  fetchArticleByArticleId(article_id)
    .then(article => {
      res.status(200).send({ article });
    })
    .catch(next);
};

exports.patchVotes = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;
  updateVotes(article_id, inc_votes)
    .then(article => {
      res.status(200).send({ article });
    })
    .catch(next);
};

exports.getArticles = (req, res, next) => {
  const queries = req.query;
  fetchArticles(queries)
    .then(articles => {
      res.status(200).send({ articles });
    })
    .catch(next);
};
