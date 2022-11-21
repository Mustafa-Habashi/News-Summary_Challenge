import mockNewsData from '../../mockNewsData.json';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';


describe('Test for articles on the HomePage component', () => {
    it('render the same number of articles passed through as props', () => {
        const newsData = mockNewsData.response.results;
        render(<MemoryRouter><HomePage headlines={newsData} ></HomePage></MemoryRouter>)
        expect(document.getElementsByClassName('card').length).toBe(newsData.length);
    })
})