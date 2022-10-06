import React from "react" //!No need to write this for functional components
import PropTypes from 'prop-types'
import { Link } from "react-router-dom" //!Her we import Link for handle anchor tag link

export default function NavBar(props) {
   
    return <>
     {/*//!Used Bootstarp Navigation Component Here*/ }
     <nav className={`navbar navbar-expand-lg navbar-${props.modes} bg-${props.modes}`}>
     <div className="container-fluid">
        {/*//!Here we convert 'a tag' to 'Link' and change 'href' to 'to' */ }
       <Link className="navbar-brand" to="/">{props.title}</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         {/*//!Here we convert 'a tag' to 'Link' and change 'href' to 'to' */ }
           <li className="nav-item">
             <Link className="nav-link" aria-current="page" to="/">Home</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="about">{props.aboutText}</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="whatilearn">What I Learn</Link>
           </li>
        </ul>

         <div className= "form-check form-switch" id="navRightSection">
            
            <section>
              <input className="form-check-input" type="checkbox" role="switch" id="setMode" onChange={props.handleMode}/>
              <label className={`form-check-label text-${props.modes === 'light' ? 'dark' : 'light'}`} htmlFor="setMode">{props.modes === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
            </section>
          </div>
       </div>
     </div>
 </nav>
 </>
};

//! Props Types
//?Here you can define PropTypes of props, Here title & aboutText both prototype are 'string'
//?You can set as object, array, number, boolean also
//?If here you pass number instead of string you get an errors : Invalid prop `title` of type `number` supplied to `NavBar`, expected `string`.
NavBar.propTypes = {title:PropTypes.string, aboutText:PropTypes.string}

//!Props type (isRequired)
//?if we set isRequired of all PropTypes then if you forgot to pass props e.g title
//?Then it will shows you Error : The prop `title` is marked as required in `NavBar`, but its value is `undefined`.
//?So You must pass props e.g title and aboutText,
NavBar.propTypes = {title:PropTypes.string.isRequired, aboutText:PropTypes.string.isRequired}

//! Defaults Props
//? Here we set default properties of props (title and aboutText).
//? Here if developer forget to pass props then default props will shown
//? if user pass only <NavBar/>, then set props.title = "Set Titles Here" & props.aboutText = "Set About Text Here"
NavBar.defaultProps = {
    title: "Set Titles Here",
    aboutText: "Set About Text Here"
}