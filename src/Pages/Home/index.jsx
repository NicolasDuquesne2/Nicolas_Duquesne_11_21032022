import { useContext } from "react"
import Header from "../../componants/Header"
import Card from "../../componants/Card"
import Banner from "../../componants/banner"
import './home.scss'
import { DataContext } from "../../utils/contexct"

function Home() {

  const { imodatas } = useContext(DataContext)
  
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
        {imodatas.map((card) => (
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