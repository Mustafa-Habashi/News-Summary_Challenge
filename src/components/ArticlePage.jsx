import React from 'react'
import { useParams } from 'react-router-dom'
import SingleArticle from './SingleArticle';
import '../css/components.css'

function ArticlePage({ headlines }) {

    const { id } = useParams();

    return (
        <div className='articles'>{headlines.map(article => article.id.replaceAll('/', '-') === id ? <SingleArticle key={article.id} title={article.fields.headline} thumbnail={article.fields.thumbnail} articleText={article.fields.bodyText} ></SingleArticle> : <div></div>)}</div>
    )
}

export default ArticlePage