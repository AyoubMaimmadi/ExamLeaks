import React, { useState, useEffect } from 'react'
import Exam from './Exam'
import Categories from './Categories'
import items from './data'
import Uparrow from './Uparrow'
import Navbar from './Navbar'
import hwdata from './HwData'
import prjdata from './PrjData'
import quizeData from './quizData'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

export const Exams = () => {
  const [examItems, setExamItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const [input, setInput] = useState('')
  const [pagename, setPagename] = useState('ExamLeaks')

  const allData = [
    ...new Set(items.map((item) => item)),
    ...new Set(quizeData.map((item) => item)),
    ...new Set(prjdata.map((item) => item)),
    ...new Set(hwdata.map((item) => item)),
  ]

  useEffect(() => {
    setExamItems([])
    allData.filter((val) => {
      if (val.title.toLowerCase().includes(input.toLowerCase())) {
        setExamItems((examItems) => [...examItems, val])
      }
    })
  }, [input])

  const mainOutput = examItems.map((item) => {
    return item
  })

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
        <Navbar />
        <div className="search">
          <input
            type="text"
            name=""
            placeholder="i.e. Software Eng ..."
            className="text"
            onChange={(e) => {
              setInput(e.target.value)
              setPagename('Results')
              setCategories([])
              if (e.target.value === '') {
                setPagename('ExamLeaks')
                setCategories(allCategories)
              }
            }}
          />
          <a href="#" className="btn">
            <i className="fa fa-search "></i>
          </a>
        </div>
        <br />
        <div className="title">
          <h2 id="Exams">
            {pagename}
            <a className="scroll-link"></a>
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

export default Exams
