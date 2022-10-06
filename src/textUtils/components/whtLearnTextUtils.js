import React from 'react'

function WhatILearn (props) {
    return <>
    <div className="accordion my-5 container" id="accordionExample">

    {/* == Question 1 ===================================================== */}
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button collapsed text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Q1. Do not include "node_modules" When Share Code to Others OR How to Install "node_modules" after delete
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`}>
        Simply Type "npm install" OR "npm i" to re-install "node_modules"
      </div>
    </div>
  </div>


  {/* == Question 2 ===================================================== */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button className={`accordion-button collapsed text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Q2. Don't import react component ("import React from 'react'")
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`}>
        If you are using function base component don't need to add "import React from 'react'" for every single file
      </div>
    </div>
  </div>


  {/* == Question 3 ===================================================== */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button className={`accordion-button collapsed text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Q3. How to test the code in VSCode terminal OR what is .mjs ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`}>
        <ol>
            <li>You goto exact that directory where you save the file in terminal,For E.g : projects\src\textUtils\forTestOnly<br/><b>Note : You can use 'cd' to change Directory</b></li>
            <li>If you want run the code in VSCode terminal you need to change the extension of files '.js' to '.mjs'</li>
            <li>
            <b>What is MJS ?</b><br/>
             --- An MJS file is a source code file containing an ES Module (ECMAScript Module) for use with a Node. js application. MJS files are written in JavaScript, and may also use the . JS extension outside of the Node.
            </li>
            <li>Then in terminal type "node ./filesname with extention" E.g. node ./module2.mjs</li>
        </ol>
      </div>
    </div>
  </div>


  {/* == Question 4 ===================================================== */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button className={`accordion-button collapsed text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Q4. What is proptypes and Where its use ?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`}>
        <ol>
            <li><b>What is Proptypes ?</b><br/>Proptypes helps you to pass value as string, object, array, boolen. We can set a propstype which we will pass, so we can't pass wrong value type accidently. If we set propTypes string then we must pass only string</li>
            <li>If you want run the code in VSCode terminal you need to change the extension of files '.js' to '.mjs'</li>
            <li>
              For use Proptypes, You need to import 'PropTypes' first. e.g : import PropTypes from 'prop-types'
            </li>
            <li>Then after the function component you need to writes propTypes of that function component 'fnComponentName.propTypes'<br/> e.g NavBar.propTypes</li>
            <li><b><u>Normal propTypes</u></b><br/>NavBar.propTypes = &#123;title:PropTypes.string, aboutText:PropTypes.string&#125;</li>
            <li><b><u>propTypes with isRequired</u></b><br/>NavBar.propTypes = &#123;title:PropTypes.string.isRequired, aboutText:PropTypes.string.isRequired&#125;</li>
            <li><b><u>Default propTypes</u></b><br/>NavBar.defaultProps = &#123;title:"Set Titles Here", aboutText:"Set About Text Here"&#125;</li>

        </ol>
      </div>
    </div>
  </div>
  
    </div>
    </>
}

export default WhatILearn;