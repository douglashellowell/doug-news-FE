import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://doug-news.herokuapp.com/api"
});

export const getArticles = async () => {
  const { data } = await apiRequest.get(`/articles`);
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

export const getTopics = async () => {
  const getTopicArticleCount = async topic => {
    const {
      data: { articles }
    } = await apiRequest.get("/articles", {
      params: { topic: topic.slug }
    });
    console.log(topic.slug, articles.length);
    return articles.length;
  };
  const {
    data: { topics }
  } = await apiRequest.get(`/topics`);
  console.log(getTopicArticleCount(topics[0]));
  const topicAndCount = topics.map(async topic => {
    return { ...topic, count: await getTopicArticleCount(topic) };
  });
  // // const topicAndCount = topics.map(topic => {
  // //   return apiRequest
  // //     .get("/articles", { params: { topic: topic.slug } })
  // //     .then(({ articles }) => {
  // //       console.log(topic, articles.length);
  // //       return { topic, count: articles.length };
  // //     })
  // //     .catch(console.dir);
  // // });
  // // console.log(">>>>", topicAndCount);
  return topicAndCount;
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
