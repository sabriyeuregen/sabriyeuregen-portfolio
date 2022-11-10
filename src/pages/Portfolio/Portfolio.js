import "./Portfolio.scss";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import portfolioData from "../../data/portfolio.json";
const Portfolio = () => {
  
   const[letterClass, setLetterClass]=useState("text-animate")
  
   useEffect(()=>{
      const timer = setTimeout(()=>{
        setLetterClass("text-animate-hover")
      }, 3000)

       return() =>{
         clearTimeout(timer)
       }

   })

   const renderPortfolio = (portfolio) => {

        return (
           <div className="images-container">
                {
                  portfolio.map((port, idx) =>{
                    return(
                      <div  className="image-box" key={idx}>
                        {/* <img/>*/} 
                      </div>
                    )
                  })
                }
           </div>
        )
          
   }


  return (
    <div className="container portfolio-page">
        <h1 className="page-title">
            <AnimatedLetters 
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15} />
           </h1>
           <div>{renderPortfolio(portfolioData)}</div>
    </div>
  )
}

export default Portfolio