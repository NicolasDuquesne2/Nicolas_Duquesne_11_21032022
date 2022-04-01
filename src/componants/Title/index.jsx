
function Title({text, page}) {
    let dropdownTitle = null

    if(page === 'about') {
        dropdownTitle = <p className='dropdown__header__title--15'>{text}</p>
    } else if(page === 'lodging') {
        dropdownTitle = <p className='dropdown__header__title--112'>{text}</p>
    }

    return dropdownTitle
}


export default Title