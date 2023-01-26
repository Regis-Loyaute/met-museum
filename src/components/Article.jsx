import { Link } from "react-router-dom";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: #fff;
  width: 300px;
  min-height: 400px;
  max-height: 400px;
  border-radius: 20px;
  box-shadow: 0px 10px 15px #ccc;
`;
const ImageContainer = styled.img`
  background-color: #fff;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border: 1px solid #fff;
`;

const Article = ({ article }) => {
  const ImageContainer = styled.img`
    background-color: #fff;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border: 1px solid #fff;
  `;

  const Title = styled.h4`
    color: #000;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin:0;
  `;

  const Text = styled.p`
    color: #000;
    font-size: 1rem;
    font-weight: 100;
    text-align: center;
    margin:0;
  `;

  const TextBold = styled.span`
    color: #000;
    font-size: 1rem;
    font-weight: 100;
  `;

  return (
    <FlexContainer className="flex flex-col gap-2">
      <Link to={`/${article.objectID}`}>
        <ImageContainer
          role="img"
          className="w-full max-h-[500px] object-cover"
          src={
            article?.primaryImage ||
            "https://clipground.com/images/loading-png-10.png"
          }
          alt={article?.title}
        />
      </Link>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Title>{article?.title}</Title>
        <Text>
          by: <TextBold>{article?.artistDisplayName || "Unknown"}</TextBold> 
        </Text>
        <Text>
          <TextBold>{article?.artistBeginDate} {article?.artistEndDate}</TextBold>
        </Text>
        <Text>
          <TextBold>{article?.country} {article?.city}</TextBold>
        </Text>
      </div>
    </FlexContainer>
  );
};


export default Article;
