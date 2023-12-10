import React, { useState, useEffect } from 'react'

// componet imports
import Exam from './Components/Exam'
import Categories from './Components/Categories'
import items from './data/syllabusData'
import Uparrow from './Components/Uparrow'
import Navbar from './Components/Navbar'

// we set an array of categories that has all the posts categories and an ALL category
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const Syllabus = () => {
  // we set useState Hooks to be able to access them from the component
  const [examItems, setExamItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const [pagename, setPagename] = useState('Thailand')
  const [input, setInput] = useState('')

  // When there is an input in the searchbar we change the name of the page
  // to Results and search for the target using simple array manipulation
  useEffect(() => {
    // the page name is set to Results when there is an input in the searchbar
    if (pagename === 'Results') {
      setExamItems([])
      items.filter((val) => {
        // we check if the input is in the title or name or category or id of the homwwork item
        if (
          val.title.toLowerCase().includes(input.toLowerCase()) ||
          val.name.toLowerCase().includes(input.toLowerCase()) ||
          val.category.toLowerCase().includes(input.toLowerCase()) ||
          val.id == parseInt(input)
        ) {
          // if true,  we add it to the examItems array to be displayed
          setExamItems((examItems) => [...examItems, val])
        }
      })
    } else {
      // when we delete the input from search bar when and page != Results
      setExamItems([])
      items.filter((val) => {
        if (val.title.toLowerCase().includes(input.toLowerCase())) {
          setExamItems((examItems) => [...examItems, val])
        }
      })
    }
  }, [input])

  // Filter Items based on their school: CSC, BA, ...

  const filterItems = (category) => {
    // when the category is all, we display all the posts and return
    if (category === 'all') {
      setExamItems(items)
      return
    }
    // when the category is not all, we filter the posts based on the category
    const newItems = items.filter((item) => item.category === category)
    // we set the new items to be displayed
    setExamItems(newItems)
  }

  return (
    <main>
      <section id='home' className='exam section'>
        <Navbar />
        <div className='search'>
          <input
            type='text'
            name=''
            placeholder='i.e. Marakech'
            className='text'
            onChange={(e) => {
              setInput(e.target.value)
              setPagename('Results')
              setCategories([])
              if (e.target.value === '') {
                setPagename('Exams')
                setCategories(allCategories)
              }
            }}
          />
          <a href='#' className='btn'>
            <i className='fa fa-search '></i>
          </a>
        </div>
        <br />
        <div className='title'>
          <h2 id='<Quizes>'>
            {pagename}
            <a className='scroll-link'></a>
          </h2>
        </div>
        {/* <Categories categories={categories} filterItems={filterItems} /> */}
        <Exam items={examItems} />
      </section>
      <Uparrow />
    </main>
  )
}

export default Syllabus
