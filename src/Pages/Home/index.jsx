import Header from "../../componants/Header"
import Card from "../../componants/Card"
import './home.scss'
import heroImage from '../../assets/shore.png'
import cards from '../../data/logements.json'

function Home() {
    return (
      <div className="wrapper">
         <Header
            selected= 'home'
        />
        <div className="home-hero-wrapper">
          <p className="home-hero-text">Chez vous, partout et ailleurs</p>
          <img className="home-hero-image" src= {heroImage} alt='landscape'/>
        </div>
        <div className="home-cards-background-wrapper">
          <div className="home-cards-wrapper">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
            />
          ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Home