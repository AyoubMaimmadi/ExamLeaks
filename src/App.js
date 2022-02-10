import React, { useState } from 'react'
import Exam from './Exam'
import Categories from './Categories'
import items from './data'
import Footer from './Footer'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
function App() {
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
      <section className="exam section">
        <div className="title">
          <h2>
            Exam Leaks
            <a href="#home" class="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Exam items={examItems} />
      </section>
      <Footer className="" />
    </main>
  )
}

export default App
