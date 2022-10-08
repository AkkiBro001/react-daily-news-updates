// import React from 'react'

import NewsMainClassBase from "./NewUpdates_CLS/NewsMainClassBase"; //!Project 1: News Updates (Class Base Components)
import NewsMainFunctionBase from "./NewUpdates_FUN/NewsMainFunctionBase"; //!Project 2: News Updates (Function Base Components)
import ErrorPage from "./ErrorPage";

function App(){
  try{
  //!Project 1 : NewsUpdates (Class Base Project) ///////////////////////////////////////////////////////
  // return <NewsMainClassBase />

  //!Project 2 : NewsUpdates (Function Base Project) ///////////////////////////////////////////////////////
  return <NewsMainFunctionBase /> //*Here we convert class base component to function base component
  }catch(e){  
    <ErrorPage errorHeading={e.code} errorMessage={e.message}/>
  }
}

export default App;
