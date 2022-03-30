import { useParams } from 'react-router-dom'
import Header from '../../componants/Header'
import Carrousel from '../../componants/carrousel'
import Tag from '../../componants/Tag'
import DropDown from '../../componants/Dropdown'



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
  const { name } = useParams()
    return (
      <div className='wrapper'>
        <Header selected=''/>
        <div className="Lodging">
          <Carrousel />
          <div className='id-wrapper'>
            <div className='address'>
              <h1>Logements : {name}</h1>
              <p></p>
            </div>
            <div className='owner-id'>
              <p className='owner-id__name'></p>
              <img className='owner-id__pic' alt='name' />
            </div>
          </div>
          <div className='tags-wrapper'>
            <div className='tags-wrapper__list'>
              {lodgingTemp.tags.map((title, index) => (
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
              title={lodgingTemp.descriptions.title}
              text={lodgingTemp.descriptions.text}
              page='lodging'
            />
            <DropDown 
               title={lodgingTemp.equipements.title}
               text={lodgingTemp.equipements.list}
               page='lodging'
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default Lodging