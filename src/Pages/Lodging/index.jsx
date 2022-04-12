import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../componants/Header'
import Carrousel from '../../componants/carrousel'
import Tag from '../../componants/Tag'
import DropDown from '../../componants/Dropdown'
import StarsWrapper from '../../componants/StarsWrapper'
import './lodging.scss'
import { DataContext } from '../../utils/fetch'


function Lodging() {
  const { id } = useParams()
  const contReturn = useContext(DataContext)
  const data = contReturn.data
  const error = contReturn.error
  const isLoading = contReturn.isLoading
  let content = null
  let pictures = null
  let cardTitle = null
  let cardLocation = null
  let cardRating = null
  let cardHostName = null
  let cardHostPict = null
  let cardDescrib = null
  let cardEquip

  if (error) {
    content = <span>Il y a un problème</span>
  }

  if(!isLoading) {
    const card = data.filter((card) => card.id === id)[0]
    pictures = card.pictures
    cardTitle = card.title
    cardLocation = card.location
    cardRating = card.rating
    cardHostName = card.host.name
    cardHostPict = card.host.picture
    cardDescrib = card.description
    cardEquip = card.equipments

    content = <div className='tags-wrapper__list'>
              {card.tags.map((title, index) => (
                <Tag
                  key={`${title}-${index}`}
                  title={title} 
                />
              ))}
              </div>
  }

  if(!isLoading) {
    return (
      <div className='wrapper'>
        <Header selected=''/>
        <div className="lodging">
          <Carrousel 
            pictures={pictures}
          />
          <div className="infos-wrapper">
          <div className='left-wrapper'>
              <h1 className='left-wrapper__name'>{cardTitle}</h1>
              <p className='address'>{cardLocation}</p>
              <div className='tags-wrapper'>
                {content}
              </div>
            </div>
            <div className='right-wrapper'>
              <StarsWrapper 
                rating={cardRating}
              />
              <div className='owner-id'>
                <p className='owner-id__name'>{cardHostName}</p>
                <img className='owner-id__pic' src={cardHostPict} alt={cardHostName} />
              </div>
            </div>
          </div>
          <div className='dropdowns-wrapper'>
            <DropDown 
              title= 'Description'
              text={cardDescrib}
              page='lodging'
            />
            <DropDown 
                title= 'Equipements'
                text={cardEquip}
                page='lodging'
            />
          </div>
        </div>
      </div>
    )
  }
}
  
  export default Lodging