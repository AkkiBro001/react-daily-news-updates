import React from 'react'
import Navbar from './NewUpdates_FUN/Navbar';
function ErrorPage({errorHeading, errorMessage}) {
  return (
    <>
    <Navbar/>
    <h1 style={{textAlign: 'center', marginTop: '1em'}}>Oops!!! {errorHeading && "Page Not Found"}</h1>
    <p style={{textAlign: 'center', marginTop: '1em'}}>{errorMessage && errorMessage}</p>
    </>
  )
}

export default ErrorPage