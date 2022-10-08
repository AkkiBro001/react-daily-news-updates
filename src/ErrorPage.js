import React from 'react'
import Navbar from './NewUpdates_FUN/Navbar';
function ErrorPage({errorHeading, errorMessage}) {
  return (
    <>
    <h1 className="text-danger" style={{textAlign: 'center', marginTop: '1em'}}>Oops!!! {errorHeading}</h1>
    <p className="fs-4" style={{textAlign: 'center', marginTop: '1em'}}>{errorMessage}</p>
    <p className="fs-3 text-success" style={{textAlign: 'center', marginTop: '1em'}}>This app works fine on 'localhost'</p>
    </>
  )
}

export default ErrorPage