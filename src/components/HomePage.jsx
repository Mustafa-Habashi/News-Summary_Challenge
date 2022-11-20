import React from 'react'
import Article from './Article'
import '../css/components.css'

function HomePage({ headlines }) {

    console.log(headlines)

    headlines.map(headline => (<li key={headline.id} >{headline.fields.headline}</li>))


    return (
        <div className='articles'>
            <h2>HomePage/headlines:</h2>
            {/* <ul>{headlineListItems}</ul> */}
            {headlines.map(headline => (
                <Article key={headline.id} thumbnail={headline.fields.thumbnail} title={headline.fields.headline} summary={headline.fields.bodyText}> </Article>))}


        </div>
    )
}

export default HomePage