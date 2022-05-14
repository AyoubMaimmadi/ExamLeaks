import React from 'react'

//  FOR ITEMS THAT ARE SAVED IN FILES WITH THE ID = id

// We get the exam or quiz or prj or syl items from the components who pass them as props
// then we map them, and put each item info into a card that can be displayed with a unique id
// We destruture their data {id, title, .... } so that we turn them into cards that can be displayed
// and finally we return the card for each item

const Exam = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((examItem) => {
        const { id, title, img, desc, link, name } = examItem
        return (
          <article key={id} className="exam-item">
            <a href={link} target="_blank" rel="noreferrer">
              <img src={img} alt={title} className="photo" to="" />
            </a>
            <div className="item-info">
              <header>
                <h4>{title}&nbsp;</h4>
                <h4 className="name">{name}</h4>
              </header>
              <p className="item-text">
                {desc}
                <br />
                ID: {id}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Exam
