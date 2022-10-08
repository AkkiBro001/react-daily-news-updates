import React from 'react'
import Navbar from './NewUpdates_FUN/Navbar';
function ErrorPage({errorHeading, errorMessage}) {
  return (
    <>
    <h1 className="text-danger" style={{textAlign: 'center', marginTop: '1em'}}>Oops!!! {errorHeading}</h1>
    <p style={{textAlign: 'center', marginTop: '1em'}}>{errorMessage}</p>
    </>
  )
}

export default ErrorPage