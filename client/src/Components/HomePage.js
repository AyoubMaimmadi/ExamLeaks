import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Exam from './Exam'
import items from '../data/ExamData'
import hwdata from '../data/HomeWorkData'
import prjdata from '../data/ProjectData'
import quizeData from '../data/QuizData'
import sylData from '../data/syllabusData'
import { useSelector } from 'react-redux'
import Typewriter from 'typewriter-effect'

const HomePage = () => {
  const posts = useSelector((state) => state.posts)

  const [examItems, setExamItems] = useState(items)
  const [flage, setFlage] = useState(false)
  const [input, setInput] = useState('')
  const [pagename, setPagename] = useState(`<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Welcome to the Online Exam Portal')
  }}
  />`)
  const [pageHeadline, setpageHeadline] = useState(
    `A Website For Boosting AUIer's GPA`
  )
  const allData = [
    ...new Set(posts.map((item) => item)),
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
          <h2 id="Home" className="typewriter">
            <span className="typewriter2">
              Boost Your GPA By Reviewing Previous
            </span>
            <Typewriter
              options={{
                strings: [
                  'Exams',
                  'Quizes',
                  'Projects',
                  'Homework',
                  'Syllabus',
                  'Reviews',
                ],
                autoStart: true,
                loop: true,
                // delay: 175,
              }}
              // onInit={(typewriter) => {
              //   typewriter
              // .typeString(`Exams`)
              // .pause(5000)
              // .deleteAll()
              // .typeString(`Quizes`)
              // .pause(5000)
              // .deleteAll()
              // .typeString(`Projects`)
              // .pause(5000)
              // .deleteAll()
              // .typeString(`Homework`)
              // .pause(5000)
              // .deleteAll()
              // .typeString(`Syllabus`)
              // .pause(5000)
              // .deleteAll()
              // .typeString(`Reviews`)
              // .pause(5000)
              // .deleteAll()
              //     .start()
              // }}
            />
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
        {flage ? (
          <Exam items={examItems} />
        ) : (
          <main>
            <section className="moveup">
              <img className="imgFix" src="./images/students.png" alt="alt" />
            </section>
          </main>
        )}
      </section>
    </main>
  )
}

export default HomePage
