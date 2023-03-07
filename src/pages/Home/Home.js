import './Home.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [" ",'S', 'a', 'b', 'r', 'i', 'y', 'e']
  const jobArray = [
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
    'ı',
    'm',
    
   
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>Merhaba,</span>
          <br /> 
          <span className={`${letterClass} _12`}>B</span>
            <span className={`${letterClass} _13`}>e</span>
            <span className={`${letterClass} _14`}>n</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          ></AnimatedLetters>
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          ></AnimatedLetters>
        </h1>
        <h2>Junior Frontend Developer / React Developer</h2>
        <Link to="/contact" className="flat-button">
          İletişime Geç
        </Link>
      </div>
  
    </div>
  )
}

export default Home
