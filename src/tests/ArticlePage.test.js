import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticlePage from '../components/ArticlePage';
import SingleArticle from '../components/SingleArticle';
import '@testing-library/jest-dom/extend-expect';

// describe('Test for article on the ArticlePage component', () => {
//     it('render the bodyText of the article expects it to be within document', () => {
//         const mockData = [{ id: 'tests/1', fields: { bodyText: 'Just Checking' } }];
//         render(<SingleArticle articleText={mockData[0].fields.bodyText}></SingleArticle>)
//         const result = screen.getByText(/Just Checking/i);
//         expect(result).toBeInTheDoucment();
//     })
// })