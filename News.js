import React, { Component } from 'react'
import Newsitems from '../Newsitems'
import { Await } from 'react-router-dom';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
    country: 'in',
    pageSize: 8,
    category:'general',
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
   
constructor(){
        super();
        console.log("Hello I am constuctor from news components");
        this.state = {
            articles:[],
            loading:false,
            page:1,

        }
 } 
 async updateNews(){
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}
  &category=${this.props.category}&apiKey=b3de5e27e14f4d239f87f89bd4b656b5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
  
 } 
      
   async componentDidMount(){
    //  console.log("cdm");
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}
    //  &category=${this.props.category}&apiKey=b3de5e27e14f4d239f87f89bd4b656b5&page=1&pageSize=${this.props.pageSize}`;
    //  let data = await fetch(url);
    //  let parsedData = await data.json()
    //  console.log(parsedData);
    //  this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})\
    this.updateNews();

   }
    handlePrevClick =  async ()=>{
    // console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}
    // &category=${this.props.category}&apiKey=b3de5e27e14f4d239f87f89bd4b656b5&page=${this.state.page-1}
    // &pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);

    // this.setState({
        // page: this.state.page-1,
        // articles:parsedData.articles
    // })
       this.setState({page: this.state.page - 1});
       this.updateNews();
    }

   handleNextClick =   async ()=>{
        // console.log("next");
        // if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        // }
      //  else{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}
        // &category=${this.props.category}&apiKey=b3de5e27e14f4d239f87f89bd4b656b5&page=${this.state.page+1}
        // &pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
      
        // this.setState({
            // page: this.state.page+1,
            // articles:parsedData.articles
        // })
    // }
    this.setState({page: this.state.page + 1});
    this.updateNews();
    }
     
  render() {
    console.log("render");
    return (
     <div className="container my-3">
        <h1 className="text-center">Newsmonkey - Top Headlines</h1>
       <div className="row">
       {this.state.articles.map((element)=>{
    
    return  <div className="col-md-4" key={element.newsurl}>
       <Newsitems  title={element.title?element.title.slice(0,40):""} 
       discription={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
       </div>
        })}
         </div>
         <div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.statepage<=1} type="button" class="btn btn-dark"  onClick={this.handlePrevClick}> &larr; previous</button>
            <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)) } type="button" class="btn btn-dark" onClick={this.handleNextClick}>next &rarr; </button>
            </div>
         </div>
   

      </div>
    )
  }
}

export default News
