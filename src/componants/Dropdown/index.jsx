import './dropdown.scss'
import Title from '../Title'
import Body from '../Body'


function DropDown({title, text, page}) {

    let classNameadd = ''

    if (page === 'lodging') {
        classNameadd = '--lodging'
    } else if (page === 'about') {
        classNameadd = '--about'
    }


    return (
        <div className={`dropdown dropdown${classNameadd}`}>
            <input type="checkbox" className='dropdown__check'/>
            <div className={`dropdown__header dropdown__header${classNameadd}`}>
                <Title 
                    text={title}
                    page={page}
                />
                <p className='dropdown__chevron'></p>
            </div>
            <div className='dropdown__text-body'>
                <Body 
                    text={text}
                    page={page}
                />
            </div>
        </div>
    )
}

export default DropDown