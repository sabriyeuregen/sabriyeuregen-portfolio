import './Portfolio.scss'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'

const Portfolio = (props) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const portfolioList = portfolioData.map((item) => (
    <div className='image-box' key={item.id}>
     
      {item.id}
        {<img className="portfolio-image" src={item.cover} alt="project" />}
      
      <div className="content">
        <div className='title'>{item.title}</div>
        <div className='description'>{item.description}</div>
        <button className="btn" onClick={() => window.open(item.url)}>
          View
        </button>
      </div>
      </div>
    
  ))

  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={'Portfolio'.split('')}
          idx={15}
        />
      </h1>
      {/*<div className='images-container'>{renderPortfolio(portfolioData.portfolio)}</div>*/}
      <div className="images-container">{portfolioList}</div>
    </div>
  )
}

export default Portfolio
