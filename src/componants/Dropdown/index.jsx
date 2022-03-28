import './dropdown.scss'


function DropDown({title, text}) {

    return (
        <div className='dropdown'>
            <input type="checkbox" className='dropdown__check'/>
            <div className='dropdown__header'>
                <p className='dropdown__header__title'>{title}</p>
                <p className='dropdown__chevron'></p>
            </div>
            <div className='dropdown__text-body'>
                <p className='dropdown__text-body-text'>{text}</p>
            </div>
        </div>
    )
}

export default DropDown