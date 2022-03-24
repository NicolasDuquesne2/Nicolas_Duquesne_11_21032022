import Header from "../../componants/Header"
import './home.scss'
import heroImage from '../../assets/shore.svg'


function Home() {
    return (
      <div className="wrapper">
         <Header
            selected= 'home'
        />
        <div className="hero-wrapper">
          <p className="hero-text">Chez vous, partout et ailleurs</p>
          <img className="hero-image" src= {heroImage} alt='landscape'/>
        </div>
        <div className="cards-background-wrapper">
          <div className="cards-wrapper">
            
          </div>
        </div>
      </div>
    )
  }
  
  export default Home