import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'

// HTML magic to go to the top page when you click on the UP arrow

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
