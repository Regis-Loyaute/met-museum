import { useEffect, useState } from "react";
import axios from "../api/axios";
import Article from "../components/Article";
<<<<<<< HEAD
import styled from "styled-components";
=======
import Loading from "../components/Loading";
>>>>>>> 6264e1c175901b2262761f90ec7447e2dd95cd32

const MainPage = () => {
  const [allArticles, setAllArticles] = useState(null);
  useEffect(() => {
    const fetchArticles = async () => {
      const articles = [];
      const { data: IDs } = await axios.get("search?isHighlight=true&q=a");
      for (const id of IDs.objectIDs.slice(0, 30)) {
        const { data } = await axios.get(`objects/${id}`);
        data.primaryImage && articles.push(data);
      }

      setAllArticles(articles);
    };

    fetchArticles();
  }, []);

  const MainContainer = styled.main`
    background-image: url('../../white (2) (1).jpg');
    font-family: 'Roboto', sans-serif;
    padding: 2rem;
    text-align: center;
  `;

  const Title = styled.h3`
    font-size: 5rem;
    font-weight: 800;
    margin-bottom: 2rem;
    color: black;
    background-image: url('../../white (2) (1).jpg');
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
  `;

  const ArticlesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    margin: 0 auto;
    max-width: 2000px;
    padding: 2rem;
    background-image: url('../../white (2) (1).jpg');
    width: 100%;
    height: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  `;

  return (
<<<<<<< HEAD
    <MainContainer>
      <Title>Highlight articles</Title>
      <ArticlesContainer>
        {allArticles.length > 0 ? (
          allArticles.map((article) => (
            <Article key={article.objectID} article={article} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ArticlesContainer>
    </MainContainer>
=======
    <main className="p-4">
      <h3 className="text-xl font-semibold my-4">Highlighted Articles</h3>
      {!allArticles ? (
        <p>
          <Loading title="Fetching articles" />
        </p>
      ) : allArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col gap-4 md:gap-8">
            {allArticles.slice(0, allArticles.length / 3).map((article) => (
              <Article key={article?.objectID} article={article} />
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            {allArticles
              .slice(allArticles.length / 3, (2 * allArticles.length) / 3)
              .map((article) => (
                <Article key={article?.objectID} article={article} />
              ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            {allArticles
              .slice((2 * allArticles.length) / 3, allArticles.length)
              .map((article) => (
                <Article key={article?.objectID} article={article} />
              ))}
          </div>
        </div>
      ) : (
        <p>No articles match</p>
      )}
    </main>
>>>>>>> 6264e1c175901b2262761f90ec7447e2dd95cd32
  );
};

export default MainPage;
