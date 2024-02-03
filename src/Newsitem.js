import React from 'react';

const Newsitem = (props)=>  {

    let {title, description, urlToImage, url, author,date, id} = props;
        return (
            <div className='my-3'>
                <div className="card "  data-bs-theme="dark">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"70px", zIndex:"1"}}>
    {id?id:"news"}
   
  </span>
                    <img style={{height:"220px"}} src={urlToImage?urlToImage:"https://www.shutterstock.com/image-vector/breaking-news-background-world-tv-260nw-719752474.jpg"} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}..</p>
                        <p className="card-text">{author} on {new Date(date).toGMTString()}</p>
                        <a href={url} className="btn text-black bg-white">More Details</a>
                    </div>
                </div>
            </div>
        );
    }
export default Newsitem;
