import { useContext } from "react"
import { DataContext } from "../../utils/fetch"
import Header from "../../componants/Header"
import Card from "../../componants/Card"
import Banner from "../../componants/banner"
import Loader from "../../componants/loader"
import './home.scss'

function Home() {

  const contReturn = useContext(DataContext)

  const data = contReturn.data
  const error = contReturn.error
  const isLoading = contReturn.isLoading
  let content = null


  if (error) {
    content = <span>Il y a un problème</span>
  }

  if (isLoading) {
    content = <Loader />
  } else {
    content = <div className="home-cards-wrapper">
              {data.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                />
              ))}
              </div>
  }

  return (
    <div className="wrapper">
        <Header
          selected= 'home'
      />
      <Banner 
        pageName='home'
      />
      <div className="home-cards-background-wrapper">
        {content}
      </div>
    </div>
  )
}
  
  export default Home