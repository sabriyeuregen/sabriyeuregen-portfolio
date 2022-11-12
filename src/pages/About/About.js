import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCss3, faGitAlt, faGithub, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div className="container about-page">
          <div className="text-zone">
            <h1>Hakkımda</h1>
            <p>
            Yönetim Bilişim Sistemleri lisans bölümünden bölüm birinciliği ile mezun oldum. 
            Kodluyoruz front-end bootcampında React eğitimi aldım .Front-end alanında kariyer 
            hedefliyorum
          </p>
          <p align="LEFT">
         <h2>Eğitim Bilgileri</h2> 
          Bandırma Onyedi Eylül Üniversitesi -Yönetim Bilişim Sistemleri mezun 2018-2022 
          <br/>
          ortalama: 3,43
          <br/>
          Kodluyoruz Front-end/React Bootcamp
          <br/>
          Techcareer.net TM Front-End Developer Bootcamp (devam ediyor)

          </p>
          <p>
          <h2>Sertifika Bilgileri</h2>
          İngilizce B1-B2 Eğitimi – İstanbul İşletme Enstitüsü 09.2020 
          <br/>
          Versiyon Kontrol ve Portfolyo Eğitimi-GlobalAIHub 11.2021
          <br/>
          Kodluyoruz Front-end/React Bootcamp 09.2022
          </p>
          </div>
          <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faJs} color="#EFD81D"/>
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGithub} color="#EC4D28"/>
                </div>
            </div>
          </div>
          
    </div>
  )
}

export default About