import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fno-image-available.html&psig=AOvVaw1QnsF6BbP88bMLs8sPcF5W&ust=1643702284489000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDW7tjC2_UCFQAAAAAdAAAAABAO"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...
            <span className="badge rounded-pill bg-danger position-absolute top-0 start-0 translate-middle-y">
              {source}
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"}
              <br />
              {date ? new Date(date).toUTCString() : "Date Unknown"}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
