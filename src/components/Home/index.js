import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'

import {
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faLinkedin,
  faGithub,
  faSquareXTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showContent, setShowContent] = useState(false)

  const nameArray = [
    ' ',
    'V',
    'i',
    'c',
    't',
    'o',
    'r',
    ' ',
    'O',
    'k',
    'o',
    'l',
    'o',
  ]

  useEffect(() => {
    const letterAnimationTimeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    const contentTimeout = setTimeout(() => {
      setShowContent(true)
    }, 3000)

    return () => {
      clearTimeout(letterAnimationTimeout)
      clearTimeout(contentTimeout)
    }
  }, [])

  let resume = '<Resume />'
  let portfolio = '<Portfolio />'

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={12}
            />
          </h1>

          {showContent && (
            <>
              <h2 className="fade-in">
                Full-Stack Developer | Video Editor | Entrepreneur
              </h2>
              <div className="social-icons fade-in">
                <a
                  href="https://www.linkedin.com/in/victor-okolo-b76203226/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
                <a
                  href="https://twitter.com/vic_szn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="social-icon"
                  />
                </a>
                <a
                  href="https://github.com/okolo157"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a
                  href="https://wa.me/2349110591628"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
                </a>
              </div>
              <div className="btn-container fade-in">
                <div className="cv-btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://flowcv.com/resume/ilbnbmi60q"
                  >
                    <button className="btn">{resume}</button>
                  </a>
                </div>
                <div className="cv-btn">
                  <Link className="link" to="/portfolio">
                    <button className="btn">{portfolio}</button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        {showContent && (
          <>
            <div className="stage-cube-cont fade-in">
              <div style={{ marginTop: '-20px' }} className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGit} color="#EC4D28" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
