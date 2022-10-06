import React, { Component } from 'react'
import NewsItems from './NewsItems'
import LoadingPage from './LoadingPage'
import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component';

export default class NewsContainer extends Component {

    static defaultProps = {
        title: 'News Updates : Top Headlines',
        country: 'in',
        pageSize: '6',
        category: 'genral',
        totalResults: 0
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.string,
        category: PropTypes.string,
    }

    //!Here we create capitalize function for set text first letter capital
    //!e.g Science, Business
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    //!Here we use constructor of class
    constructor(props) {
        //!IMP : Whenever you used constructor "super()"" must be include.
        super(props)
        //!Here we used state to store articles.
        this.state = {
            articles: [],
            loading: false,
            pages: 1,

        }

        //!Here we set the title of browser as category
        //!Note : in constructor we used this.props so we need tos props in constructor & super
        document.title = `${this.capitalize(this.props.category)} - News`;
        // console.log('constructor')
    }



    async updateNews() {
        
        
        //!Here we set loading true so we can show loading page before news coantent.
        this.setState({ loading: true })
        this.props.setProgress(10) //!Here before fetching set progess is 10
        //!Here In url we set &page=1&pageSize=20 at the end, Means Show 20 articles in 1st page 
        //!(Which is mentioned NEWSAPI documentation 'https://newsapi.org/docs/endpoints/everything') 
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pages}&pageSize=${this.props.pageSize}`;
        let response = await fetch(URL);
        this.props.setProgress(60) //!Here After fetching response set progess is 10
        let parseData = await response.json();
        //!Here we update State uing setState method similer to function component - useState()
        //!IMPNOTE: As menthined above this fucntion invoked immediately after a component is mounted.
        //!         but it below line we update the state so it will call after render then again render all components again.
        console.log("cdm 2") //!Check console to uderstand process
        
        console.log(URL)
        console.log(parseData)
        //!Here we update the state as well as set loading false so loading page not available after data get
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false, pages: 1});
        this.props.setProgress(100) //!And lastly set progess is 100
    }

    //!Here we used componentDidMount(), Which is invoked immediately after a component is mounted
    //!Means it will trigger after components load after render()


    async componentDidMount() {

        //!Here we just call updatenews function 
        //!In this function we set as async, Inside it we fetch the data using fetch API.
        this.updateNews()

    }

    //!Here we used fetchMoreData which is realated to InfiniteScroll component
    //!Here in that function we can load more pages
     fetchMoreData = async () => {
        //!Here we increament the pages so we can get next page when we scrolled
        this.setState({pages: this.state.pages + 1})
        //!Here we fetch data from url using fetch API 
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pages}&pageSize=${this.props.pageSize}`;
        let response = await fetch(URL);
        let parseData = await response.json();
        //!Here we update state
        this.setState({ 
            //!Here we concat(join) old already loaded articles with new articles which are comming from next page.
            articles: this.state.articles.concat(parseData.articles), 
            totalResults: parseData.totalResults, 
            loading: false //!Here after loading we set loading false so loading spinner not appear after page load
        });
    }   



    render() {
        console.log('render')
        return (
            <div className='container my-4 text-center'>
                {/* 
                    //! Here we set h2 as default props which is 'News Updates : Top Headlines' [line no 9: static defaultProps]
                    //! if we don't pass any title in <NewsContainer/> then it will set default props
                    //! We are set last route component for error if user type in url that thing which is not available. [in NewsMain.js <Route path="*"/>]
                    //! Then it will shows "Oops!! Page Not Found" because we have set title to last route component
                    //! e.g <Route path="*" element={<NewsContainer pageSize='6' countery='in' category="null" key="all" title="Oops!! Page Not Found"/>}/>
                    //!Here we change the heading according to news category. if user put invalid url then it shows "Oops!! Page Not Found"
                */}
                <h2 className='my-4'>{this.props.title.includes("Oops!! Page Not Found") ? this.props.title : `News Updates : ${this.capitalize(this.props.category)} Top Headlines`}</h2>
                
               <div className="container">
                {
                    //!Here we first import  InfiniteScroll component from 'react-infinite-scroll-component'
                    //!Next - pass a fetchMoreData function in that function we can load more pages
                    //!Here we set a contidition in hasMore if there are more content then true else false
                    //!loader - what to show during data fatching like : loading... , spinner, Here we set spinner loading
                 }
                <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<LoadingPage/>}
                        >
                    <div className="row my-2">
                        {/*
                            //!Here we used map method to iterate all data which comes from fetch API
                            //!Here we pass some props linke : title, description, imgURL to create component with using NewsItems.js file
                            //!Here we used ternery operator to handle null information and imgURL;
                         */}
                    
                        {
                            //!Here we used short circuit if loading is false then run array map method
                            this.state.articles.map((article) => {
                            return <div className="col-md-4 my-2" key={article.url}>
                            <NewsItems title={article.title ? article.title : ''} description={article.description ? article.description : ''} imgURL={article.urlToImage ? article.urlToImage : 'https://images.cnbctv18.com/wp-content/uploads/2019/04/shutterstock_758302231-1000x573.jpg'} newsURL={article.url} source={article.source.name} author={article.author} date={article.publishedAt} />
                        </div>
                        })
                    
                        }
                    
                    </div>
                </InfiniteScroll>
                </div>
            </div>
        )
    }
}
