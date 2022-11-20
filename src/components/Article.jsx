import React from 'react'

function Article({ title, thumbnail }) {
    return (
        <div className='article'>
            <img className='articleTumbnail' src={thumbnail}></img>
            <h1 className='articleHeadline'>{title}</h1>


        </div>
    )
}

export default Article