import "./Home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container home-page">
       <div className="text-zone">
        <h1>Merhaba,<br/> ben Sabriye
        <br/>
         junior web developer
         </h1>
         <h2>Junior Frontend Developer / React Developer</h2>
         <Link to="/contact" className="flat-button">İletişime Geç</Link>
       </div>
    </div>
  )
}

export default Home