import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import LoadingPage from './LoadingPage'
import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component';
import ErrorPage from '../ErrorPage';

const NewsContainer = (props) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const [state, setState] = useState({
        articles: [],
        loading: false,
        pages: 1,
    })    
     
    const updateNews = async () => {
        setState((preVal)=>{
            return {
                ...preVal,
                loading: true
            }
        })

        

            props.setProgress(10) 
            let URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.pages}&pageSize=${props.pageSize}`;
            let response = await fetch(URL);
            props.setProgress(60) 
            let parseData = await response.json();
        
       
        
        
        setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false, pages: 1});
        props.setProgress(100) 

        
    }

    //!Note Here, Empty [] array after function is necessary so it's run only when page load.
    //!Else it will send request infinitly. Means run updateNews() function infinitly.
    useEffect(
        ()=>{
            updateNews()
        }
    ,[])

    const fetchMoreData = async () => {
        setState(
            (preVal)=>{

                return{
                    ...preVal,
                    pages: state.pages + 1
                }
            }
            )
        
        let URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.pages}&pageSize=${props.pageSize}`;
        let response = await fetch(URL);
        let parseData = await response.json();
        
        setState(

            (preVal)=>{
               return {
                ...preVal,
                articles: state.articles.concat(parseData.articles), 
                totalResults: parseData.totalResults, 
                loading: false
                }
            }
            
        );
        
    }  
     
    if(state.articles.length === 0){
        return <ErrorPage errorHeading="corsNotAllowed" errorMessage="Requests from the browser are not allowed on the Developer plan, except from localhost."/>
    }
        
        return (
            <div className='container my-4 text-center'>
               
                <h2 className='my-4'>{props.title.includes("Oops!! Page Not Found") ? props.title : `News Updates : ${capitalize(props.category)} Top Headlines`}</h2>
                
               <InfiniteScroll
                            dataLength={state.articles.length}
                            next={fetchMoreData}
                            hasMore={state.articles.length !== state.totalResults}
                            loader={state.articles.length <= state.totalResults ? <LoadingPage/> : null}
                        >
                    <div className="container">
                    <div className="row my-2">
                       
                    
                        {
                           
                            state.articles.map((article, index) => {
                            return <div className="col-md-4 my-2" key={index}>
                            <NewsItems title={article.title ? article.title : ''} description={article.description ? article.description : ''} imgURL={article.urlToImage ? article.urlToImage : 'https://images.cnbctv18.com/wp-content/uploads/2019/04/shutterstock_758302231-1000x573.jpg'} newsURL={article.url} source={article.source.name} author={article.author} date={article.publishedAt} />
                        </div>
                        })
                    
                        }
                    
                    </div>
                </div>
                </InfiniteScroll>
                
                

            </div>
        )
    
}


NewsContainer.defaultProps = {
    title: 'News Updates : Top Headlines',
    country: 'in',
    pageSize: '6',
    category: 'genral',
    totalResults: 0
}

NewsContainer.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string,
}


export default NewsContainer;