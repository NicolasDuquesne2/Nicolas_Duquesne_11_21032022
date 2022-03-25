import Header from "../../componants/Header"
import Card from "../../componants/Card"
import './home.scss'
import heroImage from '../../assets/shore.svg'


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
        <div className="hero-wrapper">
          <p className="hero-text">Chez vous, partout et ailleurs</p>
          <img className="hero-image" src= {heroImage} alt='landscape'/>
        </div>
        <div className="cards-background-wrapper">
          <div className="cards-wrapper">
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