import React from 'react'

function SingleArticle({ title, thumbnail, articleText }) {
    return (
        <div className="card" >
            <h4 className='articleHeadline'> {title}</h4>

            <img className='articleTumbnail' src={thumbnail} alt='Headlines' ></img>
            <div className="container">

                <p> {articleText}</p>

            </div>
        </div>
    )
}

export default SingleArticle