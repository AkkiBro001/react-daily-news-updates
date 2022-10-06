import React, { useState } from 'react' 
import Navbar from './Navbar'  
import NewsContainer from './NewsContainer' 
import LoadingBar from 'react-top-loading-bar';


import { BrowserRouter, Routes, Route } from 'react-router-dom'



const NewsMainFunctionBase = () => {

    const pageSize = '6';
    const apiKey = process.env.REACT_APP_NEWS_API;

    const [progress, setProgress] = useState(0)

    const setProgressFn = (progressed) => {
    setProgress(progressed)
    }



    return (
            <div className='mainContainer'>
            
            <BrowserRouter>
                <LoadingBar
                    color='#f11946' 
                    height={2}  
                    progress= {progress}
                />
                <Navbar/>
                <Routes>
                    <Route path="/" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="general" key="Home"/>}/>
                    <Route path="/general" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="general" key="general"/>}/>
                    <Route path="/entertainment" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="entertainment" key="entertainment"/>}/>
                    <Route path="/business" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="business" key="business"/>}/>
                    <Route path="/health" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="health" key="health"/>}/>
                    <Route path="/science" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="science" key="science"/>}/>
                    <Route path="/sports" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="sports" key="sports"/>}/>
                    <Route path="/technology" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="technology" key="technology"/>}/>
                    <Route path="*" element={<NewsContainer setProgress = {setProgressFn} apiKey={apiKey} pageSize={pageSize} countery='in' category="null" key="all" title="Oops!! Page Not Found"/>}/>

                </Routes>
            </BrowserRouter>
            </div>
        )
    
}

export default NewsMainFunctionBase;


//? What is React Hooks ? ///////////////////////////////////////////////////////////////////////////////////////////////

    //*What are React Hooks ?
        //!Features of Class based componentes in function based componentes
        //!It allows you to use state and other React features without writing a class
        //!Hooks are functions Which "hook into" React State and Life Cycle features from function components

    //*Commonly used React Hooks
        //!useState : We can update State also set initial value of State.
                      //!const [text, updateText] = useState(initialValue).
        //!useEffect : It's use for performing side effect. Which similer like componentMount in Class Base.
                        //!By using this Hook, you tell React that your component needs to do something after render. 
                        //!React will remember the function you passed (we’ll refer to it as our “effect”), 
                        //!and call it later after performing the DOM updates.
        //!useContext : It's help to availabel value to golbally. Suppose if you have nested components. 3 Level Deep
                        //!And you want to pass value from top level component to last chlid component. In that case,
                        //!Genrally we used props for we can send value from L1 to L2. L2 to L3. So we go through all nested trees
                        //!using useContext we can easily pass it L1 to dirictly L3. set globally available.
        //!useRef     : It will return mutable ref object. Which has "currentProperty". 
                        //!It's Holder, which has DOM element in it's "currentProperty". It can store ref of DOM element tag in JSX[html]

    //?Documentation link of react-top-loading-bar : https://www.npmjs.com/package/react-top-loading-bar