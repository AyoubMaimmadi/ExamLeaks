import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'

// Some more HTML magic to get to the top page when you click on the arrow

const Uparrow = () => {
  return (
    <>
      <a id="endofpage" href="#home">
        <img className="arrowbtn" src="./images/arrowupsvg.svg" />
      </a>
    </>
  )
}

export default Uparrow
