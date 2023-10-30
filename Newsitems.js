import React, { Component } from 'react'


export class Newsitems extends Component {
 

  render() {
  let { title,discription,imageurl,newsurl,author,date , source} = this.props;
    return (
      <div className="my-3">
      <div className="card">
      <span class="position-absolute top-0 translate-middle badge
 rounded-pill bg-danger" style={{left:'90%', zIndex:'1' }}>{source}</span>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <p class="card-text"><small class="text-muted">By{!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>      
      </div>
    )
  }
}

export default Newsitems
