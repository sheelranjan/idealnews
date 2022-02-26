import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <div
        className="row text-center"
        style={{ marginTop: "65px", marginBottom: "10px" }}
      >
        <h1 style={{color: props.mode==="light" ? "dimgrey" : "azure"}}>
          <strong>Top {capitalizeFirst(props.category)} Headlines</strong>
        </h1>
      </div>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={page !== 1 && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3 col-sm-6" key={element.url}>
                  <NewsItem
                    mode={props.mode}
                    title={
                      element.title
                        ? element.title.slice(0, 50)
                        : "Title Not Availabe"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : "Description Not Available"
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
