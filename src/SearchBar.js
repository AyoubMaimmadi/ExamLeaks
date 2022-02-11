import React from 'react'

const SearchBar = () => {
  return (
    // <div>
    //   <input
    //     className="searchbar"
    //     type="text"
    //     placeholder=" i.e. Software Eng"
    //   />
    // </div>
    <div class="search">
      <input
        type="text"
        name=""
        placeholder="i.e. Software Eng ..."
        class="text"
      />
      <a href="#" class="btn">
        <i class="fa fa-search "></i>
      </a>
    </div>
  )
}

export default SearchBar
