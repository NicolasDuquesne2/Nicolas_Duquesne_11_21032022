import './dropdown.scss'


function DropDown({title, text, page}) {
    let dropdownBody = null

    if(typeof(text) === 'string'){
        if(page === 'about') {
            dropdownBody = <p className='dropdown__text-body__text--15'>{text}</p>
        } else if(page === 'lodging') {
            dropdownBody = <p className='dropdown__text-body__text--112'>{text}</p>
        }
    } else if (typeof(text) === 'object') {
        dropdownBody = <ul className='dropdown__text-body__list'>
                           {text.map((item) => (
                               <li>{item}</li>
                           ))}
                       </ul>
    }

    return (
        <div className='dropdown'>
            <input type="checkbox" className='dropdown__check'/>
            <div className='dropdown__header'>
                <p className='dropdown__header__title'>{title}</p>
                <p className='dropdown__chevron'></p>
            </div>
            <div className='dropdown__text-body'>
                {dropdownBody}
            </div>
        </div>
    )
}

export default DropDown