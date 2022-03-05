import React from 'react'
import Exam from './Exam'

// Some more HTML magic to get to the top page when you click on the arrow

const Uparrow = () => {
  return (
    <>
      <a id="endofpage" href="#home">
        <img className="arrowbtn" src="./images/up.png" />
      </a>
    </>
  )
}

export default Uparrow
