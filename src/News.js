import React, { useEffect, useState} from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// 6481f7dd116b4fa5b48c72a03d6b5e6d
const News = (props)=>  {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [ totalResults, setTotalResults] = useState(0);
 
  const updateNews = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pagesize=${props.pagesize}`;
      setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
  }
  useEffect(() =>{
    updateNews();
    //eslint-disable-next-line
  },[])
 

const  fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
      setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)  
  };

 
    return (
      <>
      <div className='backgrod-design'>
        <h1 className='text-center gontdesign' style={{margin:'30px 0px', marginTop:'80px',color:"white"}}><strong style={{color:"red"}}>NewsToday</strong>-Top Headline {props.category}</h1>  
      
        {loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className='container'> 
        
        <div className='row'>
          {articles.map((element) => {
            return <div className='col-md-4'>
              <Newsitem title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0, 78) : ""} urlToImage={element.urlToImage} url={element.url} author={element.author?element.author:"unknow"} date={element.publishedAt} id={element.source.id} />
            </div>
          })}
          </div>
        </div>
        </InfiniteScroll>
        
      </div>
      </>
    );
      }

News.defaultProps = {
  country: 'in',
  pagesize: 8,
  category: "general"
 }

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}

export default News;