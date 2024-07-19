import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../../context/Data';
import { CoinContext } from '../../context/CoinContext';
import "./BlogPost.css"

const BlogPost = () => {
  const { shortName } = useParams();
  const { allCoin, currency } = useContext(CoinContext);

  const post = blogPosts.find(post => post.shortName === shortName);

  if (!post) {
    return <div className='error'>404 Post not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [shortName]);


  // Optionally, find additional coin details from allCoin if needed
  const coinDetails = allCoin.find(coin => coin.symbol === post.coin.toLowerCase());

  return (
    <div className='blogpost'>
        <div className="head">
            <h1>{post.title} {coinDetails}</h1>
            <img src={post.img} alt={post.title} />
            <p style={{ background: `${post.coinColor}`}} className='postcoin'>{post.coin}</p>
            <p className='auth'>Author: {post.author}</p>
            <p className='pub'>{post.published}</p>
        </div>
        <div className="story">
            <h3>{post.story[0].subtitle}</h3>
            <p>{post.story[0].content}</p>
            <h3>{post.story[1].subtitle}</h3>
            <p>{post.story[1].content}</p>
            <h3>{post.story[2].subtitle}</h3>
            <p>{post.story[2].content}</p>
            {post.story[3] && post.story[3].content && (
                <>
                    <h3>{post.story[3].subtitle}</h3>
                    <p>{post.story[3].content}</p>
                </>
            )}
            {post.story[4] && post.story[4].content && (
                <>
                    <h3>{post.story[4].subtitle}</h3>
                    <p>{post.story[4].content}</p>
                </>
            )}
        </div>
        <br />
        <p style={{textAlign: "center"}}>Current Currency: {currency.symbol} ({currency.name})</p>
        {coinDetails && (
        <div>
          <p>Current Price: {currency.symbol}{coinDetails.current_price}</p>
          <p>Market Cap: {currency.symbol}{coinDetails.market_cap}</p>
        </div>
      )}
      <br />

        <Link to="/News/" className='read-btn'>Read More ↗️</Link>
    </div>
  );
}

export default BlogPost;
