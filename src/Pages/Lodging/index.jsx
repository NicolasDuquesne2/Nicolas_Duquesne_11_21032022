import { useParams } from 'react-router-dom'
import Header from '../../componants/Header'
import Carrousel from '../../componants/carrousel'
import Tag from '../../componants/Tag'
import DropDown from '../../componants/Dropdown'
import './lodging.scss'
import hostplacehoder from '../../assets/host.png'
import { useFetch } from '../../utils/fetch'
import datas from '../../data/logements.json'


function Lodging() {
  /*const { data, isLoading, error } = useFetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
  const { lodgingData } = data
  console.log(lodgingData)*/
  const { name } = useParams()
    return (
      <div className='wrapper'>
        <Header selected=''/>
        <div className="lodging">
          <Carrousel />
          <div className='id-wrapper'>
            <h1 className='id-wrapper__name'>{name}</h1>
            <div className='owner-id'>
              <p className='owner-id__name'>{`${lodgingTemp.owner.firstname} ${lodgingTemp.owner.name}`}</p>
              <img className='owner-id__pic' src={hostplacehoder} alt='name' />
            </div>
          </div>
          <p className='address'>{`${lodgingTemp.location.city}, ${lodgingTemp.location.district}`}</p>
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