import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import data from './data/ReviewsData'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'

const Reviews = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)

  const [reviewError, setReviewError] = useState(
    `You must have an AUI ID to leave a review!`
  )
  const [colorError3, setColorError3] = useState(false)
  const [username, setusername] = useState('')
  const [school, setschool] = useState('')
  const [review, setreview] = useState('')
  const [auiID, setauiID] = useState('')

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

  const handleReview = (e) => {
    e.preventDefault()
    // if (parseInt(auiID) == 0) {
    //   setTimeout(() => setColorError3(false), 800)
    //   setColorError3(true)
    //   setauiID('')
    //   setTimeout(() => setReviewError(`Only AUIers can leave reviews :/`), 800)
    //   setReviewError(`ID doesn't exist`)
    //   setauiID('')
    // }
    if (parseInt(auiID) >= 70000) {
      setusername('')
      setschool('')
      setreview('')
      setauiID('')
      setReviewError('Review Added Successfully!')
    } else {
      setTimeout(() => setColorError3(false), 800)
      setColorError3(true)
      setauiID('')
      setTimeout(() => setReviewError(`Only AUIers can leave reviews :/`), 800)
      setReviewError(`ID doesn't exist`)
      setauiID('')
    }
  }

  return (
    <>
      <section className="section-review">
        <Navbar />
        <SearchBar />
        <br />
        <br />
        <div className="title-review">
          <h2 id="Reviews" className="text-center">
            //&nbsp;reviews&nbsp;//
          </h2>
        </div>
        <br />
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
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="uperuper">
        <div className="container myowncontainer">
          <form onSubmit={handleReview}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group pt-2 mx-auto">
                <div className="title">
                  <h2 id="Add">Leave Review</h2>
                  <div className="underline"></div>
                  <br />
                </div>
                <div className="d-flex justify-content-center">
                  <br />
                  <h4>{reviewError}</h4>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Full Name"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="AUI School"
                  value={school}
                  onChange={(e) => {
                    setschool(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Review"
                  value={review}
                  onChange={(e) => {
                    setreview(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="number"
                  required
                  className={`${
                    colorError3 ? 'form-control btn-danger' : 'form-control'
                  }`}
                  placeholder="AUI ID"
                  // min="7000"
                  max="100500"
                  value={auiID}
                  onChange={(e) => {
                    setauiID(e.target.value)
                  }}
                />
              </div>
              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn btn-info" value="+"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Reviews
