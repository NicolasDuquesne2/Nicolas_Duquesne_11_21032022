import { useParams } from 'react-router-dom'
import Header from '../../componants/Header'
import Carrousel from '../../componants/carrousel'
import Tag from '../../componants/Tag'
import DropDown from '../../componants/Dropdown'
import './lodging.scss'
import { useFetch } from '../../utils/fetch'
import cards from '../../data/logements.json'

const lodgingTemp = {
  location: {
    city: 'Paris',
    district: 'Ile de France'
  },

  owner: {
    firstname: 'Alexendre',
    name: 'Dumas'
  },

  tags: ['Cosy', 'Canal', 'Paris 10'],

  descriptions: {
    title: 'Description',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
  },

  equipements: {
    title: 'Equipements',
    list: ['Climatisation', 'Wi-fi', 'Cuisine', 'Espace de travail', 'fer à repasser', 'sèche-cheveux', 'Cintres']
  }
}

function Lodging() {
  /*const { data, isLoading, error } = useFetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
  const { lodgingData } = data
  console.log(lodgingData)*/
  const { id } = useParams()
  const card = cards.filter((card) => card.id === id)[0]

    return (
      <div className='wrapper'>
        <Header selected=''/>
        <div className="lodging">
          <Carrousel 
            cover={card.cover}
            pictures={card.pictures}
          />
          <div className='id-wrapper'>
            <h1 className='id-wrapper__name'>{card.title}</h1>
            <div className='owner-id'>
              <p className='owner-id__name'>{card.host.name}</p>
              <img className='owner-id__pic' src={card.host.picture} alt={card.host.name} />
            </div>
          </div>
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
            <div className='stars'>

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