//?In News Update App we used Class base Components. And Then we used same code for Funcation Base

//!In class base component we need to import 'Component' along with React
import React, { Component } from 'react' 
import Navbar from './Navbar'  //!This is our navigation bar component
import NewsContainer from './NewsContainer' //!This is our News Container component [All news items stores here]
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//!Here we used class and extends with Component
export default class NewsMain extends Component {
    //!Here we set a veriable of pageSize so we can change here how many news shows in per page.
    pageSize = '6';

    //? Here we used Environment Variables for hide API Key
    //!1. First you create .env.local files out of src folder
    //!2. Save API Key there, For storing API Key, By default you will have NODE_ENV defined for you, 
            //!and any other environment variables starting with REACT_APP_
            //!REACT_APP_NEWS_API = "Your API Key Here"
    //!3. Then Store API key in apiKey variable using process.env.REACT_APP_NEWS_API
    //!4  Then pass that apiKey as props e.g <NewsContainer apiKey={this.apiKey}/>
    apiKey = process.env.REACT_APP_NEWS_API;

    //?This is for top loading bar--------------------
    //!Here we create a state.
    state = {progress: 0} 

    //!Here we create a function to update state
    //* IMP NOTE : Here we used arrow function because in arrow function 'this' keyword work properly
    //!This function goes in NewsContainer as a props. this.props.setProgress
    setProgress = (progress) => {
        //!Here we udate the value of progress which comes from NewsContainer
        //!Then update the this.state.progress
        //!And this this.state.progress is set in LoadingBar as attribute progress
        //!e.g <LoadingBa color='#f11946'height={2}progress={this.state.progress}/>
        this.setState({progress: progress})
    }

    //!In class base component we must used render method for render JSX[html]
    render() {
        return (
            <div className='mainContainer'>
            {/* 
                //! 1. Here for routers we need to install it first nmp install react-router-dom,
                //! 2. Then we need to import few react-router-dom related components e.g BrowserRouter, Routes, Route, Link
                //! 3. Here we import Link component in Navbar.js
                //! 4. Then wrapped Navbar and Routes components in BrowserRouter.
                //! 5. All categories related components and navbar related components wrapped in Route as in element
                //! 6. Here we set a path to each component. e.g if user put /entertainment then that path related element render.
            */}
            <BrowserRouter>
                {/*
                    //!color:  Here we set color of top progress
                    //!height: Here we set Height of top progress
                    //!progress:  Here we set progress = which give a progress 0 to 100
                    //?Documentation link of react-top-loading-bar : https://www.npmjs.com/package/react-top-loading-bar
                */}
                <LoadingBar
                    color='#f11946' 
                    height={2}  
                    progress={this.state.progress} 
                />
                <Navbar/>
                <Routes>
                    <Route path="/" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="general" key="Home"/>}/>
                    <Route path="/general" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="general" key="general"/>}/>
                    <Route path="/entertainment" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="entertainment" key="entertainment"/>}/>
                    <Route path="/business" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="business" key="business"/>}/>
                    <Route path="/health" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="health" key="health"/>}/>
                    <Route path="/science" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="science" key="science"/>}/>
                    <Route path="/sports" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="sports" key="sports"/>}/>
                    <Route path="/technology" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="technology" key="technology"/>}/>
                    <Route path="*" element={<NewsContainer setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} countery='in' category="null" key="all" title="Oops!! Page Not Found"/>}/>

                </Routes>
            </BrowserRouter>
            </div>
        )
    }
}




//? React Component LifeCycle ///////////////////////////////////////////////////////////////////////////////////////////////

//*The series of events that happen from the mounting of a React component to its Unmounting.
    //!Mounting - Birth of your component
    //!Update - Growth of your component
    //!Unmount - Death of your component

//? Methods in React Component LifeCycle
    
    /*// 
    
    The render() method is used to render HTML of the component in react. This method is required
    for a class base component to render the DOM. It runs during the mounting and updatind of your
    component. Render() method should be pure (i.e you cannot modify state inside it)
    
    //! 1 The componentDidMount() method runs after the component output has been rendered to the DOM.
    //! 2 The componentDidUpdate() method is invoked as soon as the updating happen. The most common use
            //!case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.
    //! 3 The componentWillUnmount() lifeCycle method is called just before the component is unmounted and 
            //!and destroyed. Usually used to perform cleanups. 

    */

    //*Here is the link for understand React Component LifeCycle through the diagram
    //?https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    //?Documentation link of react-top-loading-bar : https://www.npmjs.com/package/react-top-loading-bar