import React, { useState } from 'react'
import { useEffect } from 'react'
import exam from '../data/ExamData'

// The SearchBar component boiler plate

const SearchBar = () => {
  return (
    <div className="search">
      <input
        type="text"
        name=""
        placeholder="i.e. Software Eng ..."
        className="text"
      />
      <a href="#" className="btn">
        <i className="fa fa-search "></i>
      </a>
    </div>
  )
}
export default SearchBar
