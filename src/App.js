// import React from 'react'
// import TextUtilsMain from './textUtils/textUtilsMain'; //!Project 1 : Text Utils
import NewsMainClassBase from "./NewUpdates_CLS/NewsMainClassBase"; //!Project 2 : News Updates (Class Base Components)
import NewsMainFunctionBase from "./NewUpdates_FUN/NewsMainFunctionBase"; //!Project 2 : News Updates (Function Base Components)

function App(){
  //!Project 1 : Text Utils ////////////////////////////////////////////////////////////////////////////
  // return <TextUtilsMain/>

  //!Project 2 : NewsUpdates (Class Base Project) ///////////////////////////////////////////////////////
  // return <NewsMainClassBase />
  return <NewsMainFunctionBase /> //*Here we convert class base component to function base component
}

export default App;
