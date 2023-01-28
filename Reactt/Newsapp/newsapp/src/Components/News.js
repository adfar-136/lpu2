import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
        constructor(props){
            super(props)
            this.state ={
                articles : [],
            }
        }
 async componentDidMount(){
    const data = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
    const jsondata = await data.json()
    this.setState({articles:jsondata.articles})
 }
  render() {
    return ( 
    <div className="container">
        <div className="row">
            {this.state.articles.map((e)=>{
                return (
                  <div className="col-md-4" key={e.url}>
                    <Newsitem url = {e.url} title={e.title} description={e.description} imageUrl={e.urlToImage}/>
                  </div>
                )
            })}
        </div>

    </div>
    )
  }
}
