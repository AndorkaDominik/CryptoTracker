import React, { useEffect } from 'react'
import "./News.css"
import { blogPosts } from '../../context/Data';
import { Link } from 'react-router-dom'

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='news'>
      <h1>Fake <span>NEWS</span></h1>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
                <Link to={`/News/${post.shortName}`} key={index} className="post">
                  <div className="img-container">
                    <img src={post.img} alt={post.title} />
                    <p style={{ background: `${post.coinColor}`}}>{post.coin}</p>
                    </div>
                    <div className="bottom">
                    <h2>{post.title}</h2>
                    <div className="details">
                      <p>Author: {post.author}</p>
                      <p>{post.published}</p>
                    </div>
                  </div>
                </Link>
              ))}
      </div>
      
    </div>
  )
}

export default News