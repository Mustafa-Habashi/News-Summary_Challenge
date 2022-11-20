import React from 'react'

function HomePage({ headlines }) {

    const headlineListItems = headlines.map(headline => (<li key={headline.id} >{headline.fields.headline}</li>))


    return (
        <div>
            <h2>HomePage/headlines:</h2>
            <ul>{headlineListItems}</ul>
        </div>
    )
}

export default HomePage