import { useParams } from 'react-router-dom'
import Header from '../../componants/Header'

function Lodging() {
  const { name } = useParams()

    return (

      <div className='wrapper'>
        <Header selected=''/>
        <div className="Lodging">
          <h1>Logements : {name}</h1>
        </div>
      </div>
    )
  }
  
  export default Lodging