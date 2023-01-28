import React, { Component } from "react";
export default class Newsitem extends Component {
  render() {
    return (
      <div className="container ">
        
          <div className="card" style={{ width: "18rem" }}>
            <img src={this.props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">
                {this.props.description}
              </p>
              <a href={this.props.url} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        
      </div>
    );
  }
}
