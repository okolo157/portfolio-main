import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Image from './Pic'
import Loader from 'react-loaders'

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
  const jobArray = [
    '-',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
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
            />{' '}
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer | Video Editor | Entrepreneur </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Image />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
