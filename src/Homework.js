import React, { useState } from 'react'
import Exam from './Exam'
import Categories from './Categories'
import items from './HwData'
import Uparrow from './Uparrow'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const Homewok = () => {
  const [examItems, setExamItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setExamItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setExamItems(newItems)
  }

  return (
    <main>
      <section id="home" className="exam section">
        <div className="title">
          <h2 id="homework">
            Homework Leaks
            <a class="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Exam items={examItems} />
      </section>
      <Uparrow />
    </main>
  )
}

export default Homewok
