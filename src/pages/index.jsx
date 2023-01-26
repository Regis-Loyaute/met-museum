import { useEffect, useState } from "react";
import axios from "../api/axios";
import Article from "../components/Article";
import styled from "styled-components";

const MainPage = () => {
  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const articles = [];
      const { data: IDs } = await axios.get("search?isHighlight=true&q=a");
      for (const id of IDs.objectIDs.slice(0, 20)) {
        const { data } = await axios.get(`objects/${id}`);
        articles.push(data);
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
  );
};

export default MainPage;
