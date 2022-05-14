import React, { useState, useEffect } from 'react'

// components imports
import Navbar from './Navbar'
import Exam from './Exam'
import Uparrow from './Uparrow'
import items from '../data/ExamData'
import hwdata from '../data/HomeWorkData'
import prjdata from '../data/ProjectData'
import quizeData from '../data/QuizData'
import sylData from '../data/syllabusData'

// Used to fetch the data from the global redux store
import { useSelector } from 'react-redux'

// To give that self writing and deleting effect we used in the homepage
import Typewriter from 'typewriter-effect'

const HomePage = () => {
  // we initialize useSelector as a hook, where we get access the to whole redux store
  // and we extract the posts from the store that we exported from the reducers/index.js
  const posts = useSelector((state) => state.posts)

  // we set useState Hooks to be able to access them from the component
  const [examItems, setExamItems] = useState(items)
  const [flage, setFlage] = useState(false)
  const [input, setInput] = useState('')

  // we put all data of exams, quizes, projects, homework, ... in one array
  const allData = [
    ...new Set(posts.map((item) => item)),
    ...new Set(quizeData.map((item) => item)),
    ...new Set(prjdata.map((item) => item)),
    ...new Set(hwdata.map((item) => item)),
    ...new Set(sylData.map((item) => item)),
  ]

  // When an input is detected in the searchbar, the flage is set to true and we search
  // for the target using simple array manipulation

  useEffect(() => {
    if (flage) {
      // we 1st set the exam items that will be displayed to an empty array
      setExamItems([])
      // we map the allData array that has all the data of exams, quizes, projects, homework, ...
      allData.filter((val) => {
        // we check if the input is in the title or name or category or id of the item
        if (
          val.title.toLowerCase().includes(input.toLowerCase()) ||
          val.name.toLowerCase().includes(input.toLowerCase()) ||
          val.category.toLowerCase().includes(input.toLowerCase()) ||
          val.id == parseInt(input)
        ) {
          // if it is we add it to the examItems array to be displayed
          setExamItems((examItems) => [...examItems, val])
        }
      })
    }
    // this means we have to run the effect every time the input changes
  }, [input])

  // in the JSX/HTML we check if the flage is true or false
  // flage ? .... : ....
  // if flage is true we display the examItems array that has the filtered data
  // if flage is false we display a the homepage interface which is a picture
  // line 113-124

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
              if (e.target.value === '') {
                setFlage(false)
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
              }}
            />
            <a className="scroll-link"></a>
          </h2>
        </div>
        {flage ? (
          <>
            <Exam items={examItems} />
            <Uparrow />
          </>
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
