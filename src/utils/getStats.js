export const getStats = articles => {
  console.log("getting stats....");
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
