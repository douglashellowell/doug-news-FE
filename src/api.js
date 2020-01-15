import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://doug-news.herokuapp.com/api"
});

export const getArticles = async () => {
  const { data } = await apiRequest.get(`/articles`);
  return data.articles;
};

export const getSingleArticle = async article_id => {
  console.log("article_id: >>>>", article_id);
  const { data } = await apiRequest.get(`/articles/${article_id}`);
  const comments = await apiRequest.get(`/articles/${article_id}/comments`);
  return [data.article, comments.data.comments];
};

export const insertComment = async (article_id, comment) => {
  const { data } = await apiRequest.post(
    `/articles/${article_id}/comments`,
    comment
  );
  return data.comment;
};

export const getTopics = async () => {
  const { data } = await apiRequest.get(`/topics`);
  return data.topics;
};

export const patchVote = async (target, id, vote) => {
  const response = await apiRequest.patch(`/${target}/${id}`, {
    inc_votes: vote
  });
  return response;
};
