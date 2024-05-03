import { useEffect, useState } from "react";
import "../styles/ArticleSection.css";
import Button from "./Button";
import CardsContainer from "./CardsContainer";
import Searchbar from "./Searchbar";
import RegularCard from "./RegularCard";

const mockData = [
  {
    _id: 1,
    title: "Title 1",
    date: Date.now(),
    cover_photo: "/preview.png",
    content: "Content",
  },
  {
    _id: 2,
    title: "Title 2",
    date: Date.now(),
    cover_photo: "/preview.png",
    content: "Content",
  },
  {
    _id: 3,
    title: "Title 3",
    date: Date.now(),
    cover_photo: "/preview.png",
    content: "Content",
  },
  {
    _id: 4,
    title: "Title 4",
    date: Date.now(),
    cover_photo: "/preview.png",
    content: "Content",
  },
  {
    _id: 5,
    title: "Title 5",
    date: Date.now(),
    cover_photo: "/preview.png",
    content: "Content",
  },
];

const ArticleSection = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cards, setCards] = useState([]);

  const isCardMatch = (val, card) => {
    const titleMatch = card.title
      .toLowerCase()
      .includes(val.toLowerCase().trim());
    return (val.length != 0 && titleMatch) || val.length == 0;
  };

  const handleCardSearch = (value) => {
    const cardsMatched = [];

    setSearchText(value);
    cards.forEach((card) => {
      if (isCardMatch(value, card)) {
        cardsMatched.push(<RegularCard key={card._id} {...card} />);
      }
    });

    setSearchResult(cardsMatched);
  };

  useEffect(() => {
    handleCardSearch(searchText);
  }, []);

  return (
    <div id="articleSection">
      <div className="article-sec-heading-container">
        <p className="article-sec-heading">Learn About Everything Tech!</p>
        <p className="article-sec-subheading">
          brought to you by AWSCC Department of Software and Web Development
        </p>
      </div>
      {cards.length > 0 && (
        <div className="article-top-container">
          <Button variant={"primary"}>Create Article</Button>
          <Searchbar searchText={searchText} setSearchText={handleCardSearch} />
        </div>
      )}
      <CardsContainer isEmpty={cards.lenght === 0} filterResult={searchResult} searchText={searchText} />
    </div>
  );
};

export default ArticleSection;
