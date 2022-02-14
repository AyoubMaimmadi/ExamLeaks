import React from 'react'
const date = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <div className="footerCol">
        <div className="container">
          <ul className="socialCol">
            <li>
              <a href="https://www.facebook.com/AYOUB.MAIMMADI1">
                <img src="./images//fb.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ayoubmaimmadi/">
                <img src="./images//insta.svg" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Ayoubmaimmadi2">
                <img src="./images//twitter.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ayoub-maimmadi-533587198/">
                <img src="./images//linkedin.svg" />
              </a>
            </li>
          </ul>
          <div className="copyrightCol">
            <p>
              Copyright &copy; Ayoub Maimmadi
              <span> {date}</span>. all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
