import React from 'react'

// We get items from Exams, Quizes, ...
// We destruture then into cards that can be displayed

const Exam = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((examItem) => {
        const { id, title, img, desc, link, name } = examItem
        return (
          <article key={id} className="exam-item">
            <a href={link} target="_blank">
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
