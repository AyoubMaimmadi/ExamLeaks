import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import data from './data/ReviewsData'
import './css/reviews.css'
import Uparow from './Components/Uparrow'

const Reviews = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)

  // Every time the (people, index) changes,  we check if its the end of the array go over the last array index

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  // Every time the index changes, we set up an interval for 5 seconds, Then we increase the index and clear said interval

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="section-review">
      <div className="title-review">
        <h2 id="Reviews" className="text-center">
          //&nbsp;reviews&nbsp;//
        </h2>
      </div>
      <div className="section-center-review">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <myarticle className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title-review">{title}</p>
              <p className="text-review">{quote}</p>
              <BsFillChatQuoteFill className="icon-review" />
            </myarticle>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
      <Uparow />
    </section>
  )
}

export default Reviews
