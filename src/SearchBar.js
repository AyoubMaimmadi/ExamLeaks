import React, { useState } from 'react'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const SearchBar = () => {
  //Searching

  const [examItems, setExamItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const inp = 'CSC'

  const filterItems = (category) => {
    if (category === inp) {
      setExamItems(inp)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setExamItems(newItems)
  }
  return (
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
