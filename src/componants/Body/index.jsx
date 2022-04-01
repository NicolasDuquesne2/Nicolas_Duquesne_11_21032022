import Equipment from "../Equipment"

function Body({text, page}) {
    let dropdownBody = null

    if(typeof(text) === 'string') {
        if(page === 'about') {
            dropdownBody = <p className='dropdown__text-body__text--15'>{text}</p>
        } else if(page === 'lodging') {
            dropdownBody = <p className='dropdown__text-body__text--112'>{text}</p>
        }
    } else if (typeof(text) === 'object') {
        dropdownBody = <ul className='dropdown__text-body__list'>
                           {text.map((item, index) => (
                               <Equipment
                                    key={`${item}-${index}`}
                                    text={item} 
                               />
                           ))}
                       </ul>
    }

    return dropdownBody
}


export default Body