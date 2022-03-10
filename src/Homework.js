import React, { useState } from 'react'
import Exam from './Components/Exam'
import Categories from './Components/Categories'
import items from './data/HomeWorkData'
import Uparrow from './Components/Uparrow'
import Navbar from './Components/Navbar'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const Homewok = () => {
  const [examItems, setExamItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  // Filter Items based on their school: CSC, BA, ...

  const filterItems = (category) => {
    if (category === 'all') {
      setExamItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setExamItems(newItems)
  }

  return (
    <>
      <main>
        <section id="home" className="exam section">
          <Navbar />
          <br />
          <div className="title">
            <h2 id="Homework">
              Homework
              <a className="scroll-link"></a>
            </h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Exam items={examItems} />
        </section>
        <Uparrow />
      </main>
    </>
  )
}

export default Homewok
