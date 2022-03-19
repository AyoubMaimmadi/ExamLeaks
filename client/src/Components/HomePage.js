import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Exam from './Exam'
import items from '../data/ExamData'
import Uparrow from './Uparrow'
import hwdata from '../data/HomeWorkData'
import prjdata from '../data/ProjectData'
import quizeData from '../data/QuizData'
import sylData from '../data/syllabusData'
import { BsTypeH1 } from 'react-icons/bs'

const HomePage = () => {
  const [examItems, setExamItems] = useState(items)
  const [flage, setFlage] = useState(false)
  const [input, setInput] = useState('')
  const [pagename, setPagename] = useState(`A Website For Boosting AUIer's GPA`)
  const [pageHeadline, setpageHeadline] = useState(
    `A Website For Boosting AUIer's GPA`
  )
  const allData = [
    ...new Set(items.map((item) => item)),
    ...new Set(quizeData.map((item) => item)),
    ...new Set(prjdata.map((item) => item)),
    ...new Set(hwdata.map((item) => item)),
    ...new Set(sylData.map((item) => item)),
  ]
  // When there is an input in the searchbar we change the name of the page to Results and search for the target using simple array manipulation

  useEffect(() => {
    if (pagename === 'Results') {
      setExamItems([])
      allData.filter((val) => {
        if (
          val.title.toLowerCase().includes(input.toLowerCase()) ||
          val.name.toLowerCase().includes(input.toLowerCase()) ||
          val.category.toLowerCase().includes(input.toLowerCase()) ||
          val.id == parseInt(input)
        ) {
          setExamItems((examItems) => [...examItems, val])
        }
      })
    } else {
      setExamItems([])
      examItems.filter((val) => {
        if (val.title.toLowerCase().includes(input.toLowerCase())) {
          setExamItems((examItems) => [...examItems, val])
        }
      })
    }
  }, [input])

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
              setFlage(true)
              setPagename('Results')
              if (e.target.value === '') {
                setFlage(false)
                setPagename(`A Website For Boosting AUIer's GPA`)
                setpageHeadline(`A Website For Boosting AUIer's GPA`)
              }
            }}
          />
          <a href="#" className="btn">
            <i className="fa fa-search "></i>
          </a>
        </div>
        <br />
        <div className="title">
          <h2 id="Home">
            {pagename}
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
        {flage ? (
          <Exam items={examItems} />
        ) : (
          <main>
            <section className="moveup">
              <div class="mainbox">
                <div class="err">&nbsp;A</div>
                <div class="far">&nbsp;U</div>
                <div class="err2">&nbsp;I</div>
                <div class="msg">
                  A Website For Boosting AUIer's
                  <h2>GPA</h2>
                  <p>
                    Visit <Link to="/reviews">Reviews</Link> to see your friends
                    comments.
                  </p>
                </div>
              </div>
            </section>
          </main>
        )}
      </section>
      {/* <Uparrow /> */}
    </main>
  )
}

export default HomePage
