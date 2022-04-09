import React from 'react'

// Clone of Exam that deals with _id (MonogoDB)
// We get items from Exams, Quizes, ...
// We destruture then into cards that can be displayed

const Examm = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((examItem) => {
        const { _id, title, img, desc, link, name } = examItem
        return (
          <article key={_id} className="exam-item">
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
                ID: {_id}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Examm
