import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://doug-news.herokuapp.com/api"
});

export const getArticles = async (order, category, filter) => {
  const { data } = await apiRequest.get(`/articles`, {
    params: { sort_by: order, [category]: filter }
  });
  return data.articles;
};

export const getSingleArticle = async article_id => {
  const {
    data: { article }
  } = await apiRequest.get(`/articles/${article_id}`);
  return article;
};

export const insertComment = async (article_id, comment) => {
  const { data } = await apiRequest.post(
    `/articles/${article_id}/comments`,
    comment
  );
  return data.comment;
};

export const getTopics = () => {
  return apiRequest
    .get("/topics")
    .then(({ data: { topics } }) => {
      return Promise.all(
        topics.map(topic => {
          return apiRequest
            .get("/articles", {
              params: { topic: topic.slug }
            })
            .then(({ data: { articles } }) => {
              return { ...topic, count: articles.length };
            });
        })
      );
    })
    .then(topicsWithCount => {
      return topicsWithCount;
    });
};

export const patchVote = async (target, id, vote) => {
  const { status } = await apiRequest.patch(`/${target}/${id}`, {
    inc_votes: vote
  });
  return status;
};

export const getArticleComments = async article_id => {
  const {
    data: { comments }
  } = await apiRequest.get(`/articles/${article_id}/comments`);
  return comments;
};

export const deleteById = async (id, target) => {
  const { status } = await apiRequest.delete(`/${target}/${id}`);
  return status;
};

export const getAllUsers = async () => {
  const {
    data: { users }
  } = await apiRequest.get("/users");
  return users;
};

export const getUserImg = async username => {
  const {
    data: {
      user: { avatar_url }
    }
  } = await apiRequest.get(`users/${username}`);
  return avatar_url;
};
