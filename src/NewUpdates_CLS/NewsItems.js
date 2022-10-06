import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        //!Here we use object deconstructor for props which comes from NewsContainer.js
        //!e.g <NewsItems title={article.title} description={article.description} imgURL={article.urlToImage} newsURL={article.url}/>
        const {title, description, imgURL, newsURL, author, date, source} = this.props;

        return (
                
                <div className="card" style={{width: '25rem'}}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:'1' }}>{source}
                    </span>
                    <img src={imgURL} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">by {author ? author : 'unknown'} on {new Date(date).toUTCString()}
                            </small></p>
                            <a target="_blank" href={newsURL} className="btn btn-sm btn-dark">Read Now</a>
                        </div>
                </div>
            
        )
    }
}
