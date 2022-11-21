import React, { useState } from 'react'
import '../css/components.css'
import { Link } from 'react-router-dom'

function Article({ title, thumbnail, summary, routeId }) {
    const [isOpen, setIsOpen] = useState(false)


    return (

        <div className="card" >
            <img className='articleTumbnail' src={thumbnail} alt='Headlines' onClick={() => setIsOpen(!isOpen)} ></img>
            <div className="container">
                <Link to={`/article/${routeId}`}> <h4 className='articleHeadline'> {title}</h4> </Link>
                {isOpen && <h5> <b>Summary</b></h5>}
                {isOpen && <p className='summary'>{summary}</p>}


            </div>
        </div>
    )
}

export default Article