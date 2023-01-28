import React, { useEffect, useState } from 'react'
import Newsitem from "./Newsitem";
export default function Function() {
 const [News,setNews] = useState([])
  let GetNews =async()=>{
    const data = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
    const jsondata =await  data.json()
    setNews(jsondata.articles)

  }
  useEffect(()=>{
    GetNews()
  })
  return (
    <div className="container">
        <div className="row">
            {News.map((e)=>{
                return (
                  <div className="col-md-4">
                    <Newsitem url = {e.url} title={e.title} description={e.description} imageUrl={e.urlToImage}/>
                  </div>
                )
            })}
        </div>
        </div>
  )
}
