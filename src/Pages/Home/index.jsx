import Header from "../../componants/Header"
import Card from "../../componants/Card"
import Banner from "../../componants/banner"
import './home.scss'
import cards from '../../data/logements.json'

function Home() {
    return (
      <div className="wrapper">
         <Header
            selected= 'home'
        />
        <Banner 
          pageName='home'
        />
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