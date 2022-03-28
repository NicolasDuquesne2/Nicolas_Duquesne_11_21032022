import Header from "../../componants/Header"
import Card from "../../componants/Card"
import './home.scss'
import heroImage from '../../assets/shore.png'


const cards = [
  {
    name:'Villa Maria'
  },

  {
    name:'Cozy loft champs élysées'
  },

  {
    name:'Cozy loft boulevard Raspail'
  },

  {
    name:'Cozy loft boulevard du Montparnasse'
  },

  {
    name:'Cozy loft boulevard Saint Michel'
  },

  {
    name:'Cozy loft rue Saint-Jacques'
  },

]

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
          {cards.map((card, index) => (
            <Card
              key={`${card.name}-${index}`}
              title={card.name}
            />
          ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Home