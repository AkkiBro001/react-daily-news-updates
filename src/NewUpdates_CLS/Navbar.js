import React, { Component } from 'react'
import { Link } from 'react-router-dom' //!Here we import "Link" react-router-dom 

export default class Navbar extends Component {
    render() {
        return (
            <>
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* 
                        //! Here we set to = "/" means Home page
                    */}
                    <Link className="navbar-brand" to="react-daily-news-updates">Daily News Updates</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="react-daily-news-updates">Home</Link>
                            </li>

                             {/* 
                                    //! Here we set to = "/category" means when we click that link update browser URL. 
                                    //! Then all category related components render again
                            */}   
                           
                            <li className="nav-item"><Link className="nav-link" to="react-daily-news-updates/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="react-daily-news-updates/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="react-daily-news-updates/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="react-daily-news-updates/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="react-daily-news-updates/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="react-daily-news-updates/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="react-daily-news-updates/technology">Technology</Link></li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
            </>
        )
    }
}
