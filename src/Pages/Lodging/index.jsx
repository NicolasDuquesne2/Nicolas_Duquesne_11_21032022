import { useParams } from 'react-router-dom'
import Header from '../../componants/Header'
import Carrousel from '../../componants/carrousel'
import Tag from '../../componants/Tag'
import DropDown from '../../componants/Dropdown'
import StarsWrapper from '../../componants/StarsWrapper'
import './lodging.scss'
import { useFetch } from '../../utils/fetch'
import cards from "../../data/logements.json"


function Lodging() {
  /*const datas = useFetch('./logements.json')
  console.log(datas)*/
  const { id } = useParams()
  const card = cards.filter((card) => card.id === id)[0]

    return (
      <div className='wrapper'>
        <Header selected=''/>
        <div className="lodging">
          <Carrousel 
            pictures={card.pictures}
          />
          <div className="infos-wrapper">
          <div className='left-wrapper'>
              <h1 className='left-wrapper__name'>{card.title}</h1>
              <p className='address'>{card.location}</p>
              <div className='tags-wrapper'>
                <div className='tags-wrapper__list'>
                  {card.tags.map((title, index) => (
                    <Tag
                      key={`${title}-${index}`}
                      title={title} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='right-wrapper'>
              <StarsWrapper 
                rating={card.rating}
              />
              <div className='owner-id'>
                <p className='owner-id__name'>{card.host.name}</p>
                <img className='owner-id__pic' src={card.host.picture} alt={card.host.name} />
              </div>
            </div>
          </div>
          <div className='dropdowns-wrapper'>
            <DropDown 
              title= 'Description'
              text={card.description}
              page='lodging'
            />
            <DropDown 
               title= 'Equipements'
               text={card.equipments}
               page='lodging'
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default Lodging