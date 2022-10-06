//!So Here we create a Loading page 
import React, { Component } from 'react'
import Loading from './loading.gif' //!Here we import gif file name OR alias that Loading

export default class LoadingPage extends Component {
    render() {
        return (
            <div>
                {/* 
                    //!Here we used Loading as src and center the loading using bootstrap class
                */}
                <img src={Loading} alt="Loding" className='text-center'/>
            </div>
        )
    }
}
