import React, { useState } from 'react'
import '../css/components.css'

function Article({ title, thumbnail, summary }) {
    const [isOpen, setIsOpen] = useState(false)


    return (

        <div className="card" onClick={() => setIsOpen(!isOpen)}>
            <img className='articleTumbnail' src={thumbnail} alt='Headlines' ></img>
            <div className="container">
                <h4 className='articleHeadline'> {title}</h4>
                {isOpen && <h5> <b>Summary</b></h5>}
                {isOpen && <p className='summary'>{summary}</p>}

            </div>
        </div>
    )
}

export default Article