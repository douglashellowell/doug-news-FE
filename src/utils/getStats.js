export const getStats = articles => {
  const result = {};

  articles.forEach(article => {
    if (result[article.author]) {
      result[article.author]++;
    } else {
      result[article.author] = 1;
    }
  });
  return result;
};
