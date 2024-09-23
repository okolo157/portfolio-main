import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Image from './Pic'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Text from '../Text'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
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
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page" style={{ marginTop: '-25px' }}>
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
              idx={15}
            />
          </h1>
          <h2>Full-Stack Developer | Video Editor | Entrepreneur</h2>
                <h3> Touch the letters to see some magic </h3>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/victor-okolo-b76203226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="social-icon"
              />
            </a>
            <a
              href="https://twitter.com/vic_szn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                size="2x"
                className="social-icon"
              />
            </a>
            <a
              href="https://github.com/vik1234-del"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="social-icon"
              />
            </a>
          </div>
        </div>

        <Text />

        <Image />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
