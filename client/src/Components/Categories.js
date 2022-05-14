import React from 'react'

// We get categories and the function: filterItems from the components who pass them as props
// then we map and filter the categories array to create a button for each category
// when we click on a button, we call the filterItems function with the category as a parameter
// and then only the items with tbat specific category will be displayed

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
