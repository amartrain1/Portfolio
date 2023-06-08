import React, {useEffect} from 'react'
import './resumeStyle.css'

const Resume = () => {

  // sets document title when this page is open
  useEffect(() => {
    document.title = 'Portfolio | Resume'
  })
  return (
    <div className='mainResume'>
        <h1 className='placeholderText'><i>I have not written a professional resume yet, I am awaiting a response from career services. It will be inputted with a pdf download as soon as I have made one I am confident in.</i></h1>
    </div>
  )
}

export default Resume