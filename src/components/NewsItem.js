import React from 'react';
import '../css/header.css'

const NewsItem =({item}) => {
 
 

    return (
        <div className="news_item">
            <h1>{item.title}</h1>
            <p>{item.feed}</p>
        </div>
    )
}
export default NewsItem