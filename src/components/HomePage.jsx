import React from 'react'
import Article from './Article'

function HomePage({ headlines }) {

    headlines.map(headline => (<li key={headline.id} >{headline.fields.headline}</li>))


    return (
        <div>
            <h2>HomePage/headlines:</h2>
            {/* <ul>{headlineListItems}</ul> */}
            {headlines.map(headline => (<Article key={headline.id} thumbnail={headline.fields.thumbnail} title={headline.fields.headline}> </Article>))}


        </div>
    )
}

export default HomePage