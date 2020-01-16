export const getStats = articles => {
  console.log("getting stats....");
  console.log("articesl", articles);
  const result = {};

  articles.forEach(article => {
    console.log(result[articles.author]);
    if (result[article.author]) {
      console.log("adding one to", article.author);
      result[article.author]++;
    } else {
      console.log("making1");
      result[article.author] = 1;
    }
  });
  console.log(result);
  return result;
};
