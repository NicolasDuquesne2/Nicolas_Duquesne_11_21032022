import './starswrapper.scss'
import Star from '../Star'

function StarsWrapper({rating}) {

    const orangNumber = rating -1
    const greyNumber = 5 - rating -1
    const classNames = []

    for (let i = 0; i <= orangNumber; i++) {
        classNames.push('star--orange')
    }

    for (let i = 0; i <= greyNumber; i++) {
        classNames.push('star--grey')
    }

    return(
        <div className='stars-wrapper'>
            {classNames.map((className, index) => (
                <Star 
                    key={`${className}-${index}`}
                    className= {className}
                />
            ))}
        </div>
    )
}

export default StarsWrapper