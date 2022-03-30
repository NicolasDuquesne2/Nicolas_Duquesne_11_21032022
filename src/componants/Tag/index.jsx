import './tag.scss'

function Tag({title}) {
    return (
        <div className='tag'>
            <p className='tag__title'>{title}</p>
        </div>
    )
}

export default Tag