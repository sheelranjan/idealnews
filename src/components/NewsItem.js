import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div style={{backgroundColor: props.mode==="light"?"rgb(255, 255, 255)":"rgb(55,60,84)"}} className="card">
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
          <h5 style={{color: props.mode==="light"?"rgb(33,37,41)":"rgb(240,240,240)"}} className="card-title">
            {title}...
            <span style={{backgroundColor: props.mode==="light"?"rgb(220,53,69)":"rgb(163, 0, 55)"}} className="badge rounded-pill position-absolute top-0 start-0 translate-middle-y">
              {source}
            </span>
          </h5>
          <p style={{color: props.mode==="light"?"rgb(33,37,41)":"rgb(230,230,230)"}} className="card-text">{description}...</p>
          <p className="card-text">
            <small style={{color: props.mode==="light" ? "grey" : "lightblue"}}>
              By {author ? author : "Unknown"}
              <br />
              {date ? new Date(date).toUTCString() : "Date Unknown"}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-sm btn-${props.mode==="light"?"primary":"dark"}`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
