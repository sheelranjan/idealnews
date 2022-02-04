import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  
  static defaultProps = {
    country: 'in',
    pageSize: 20,
    category: "&category=general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
  }
  async componentDidMount(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  // handlePrevClick = async ()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category}&apiKey=f6838838ba4f4d76ab104be2063a6e70&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   this.setState({
  //     page: this.state.page-1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })

  // }
  // handleNextClick = async ()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category}&apiKey=f6838838ba4f4d76ab104be2063a6e70&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   this.setState({
  //     page: this.state.page+1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })
  // }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({page: this.state.page + 1})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  }

  render() {
    return (
      <div className="container my-3">
        <div className="row text-center" style={{marginTop: '65px', marginBottom: '10px'}}><h1><strong>Top Headlines</strong></h1></div>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.page!== 1 && <Spinner/>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element)=>{
                return(
                  <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 45):"Title Not Availabe"} description={element.description?element.description.slice(0, 85):"Description Not Available"} imgUrl={element.urlToImage?element.urlToImage:"https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled = {this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" id="nxtBtn" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}
