import axios from "axios";

const baseURL = "https://doug-news.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await axios.get(`${baseURL}/articles`);
  return data.articles;
};

export const getSingleArticle = async article_id => {
  console.log("article_id: >>>>", article_id);
  const { data } = await axios.get(`${baseURL}/articles/${article_id}`);
  const comments = await axios.get(
    `${baseURL}/articles/${article_id}/comments`
  );
  return [data.article, comments.data.comments];
};

export const insertComment = async (article_id, comment) => {
  const { data } = await axios.post(
    `${baseURL}/articles/${article_id}/comments`,
    comment
  );
  return data.comment;
};

export const getTopics = async () => {
  const { data } = await axios.get(`${baseURL}/topics`);
  return data.topics;
};
