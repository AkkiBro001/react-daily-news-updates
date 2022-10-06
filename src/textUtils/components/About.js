import React from 'react'

export default function About(props) {

  return (
    <>
      <div className="accordion" id="accordionExample" className="container my-3 py-3">
        <h2 className={`text-center text-${props.modes === 'light' ? 'dark' : 'light'}`}>About Us</h2>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button collapsed text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'} ${props.modes === 'dark' ? 'invert' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className={`accordion-body text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`}>
              Textutils gives you a way to analyze your text quicky and efficiently. Be it word count, character count and other utilities
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className={`accordion-button collapsed text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'} ${props.modes === 'dark' ? 'invert' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className={`accordion-body text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`}>
              TextUtils is a free character counter tool that provides instant character count and word count stataistics for a given text. TextUtils reports the number of the words and characters. Thus it is suitable for writing text with word / character limit.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className={`accordion-button collapsed text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'} ${props.modes === 'dark' ? 'invert' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className={`accordion-body text-${props.modes === 'light' ? 'dark' : 'light'} bg-${props.modes === 'light' ? 'light' : 'dark'}`}>
              This word counter software works in any browser such as Chorme, Firfox, Internate Explorer, Safari, Opera.
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
