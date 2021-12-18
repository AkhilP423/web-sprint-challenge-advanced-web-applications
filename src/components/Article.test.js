import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

//test article, given in challenge
const TestArticle = {

    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00 ', //timestamp of when article was added
    summary: "summary", //short summary statement of article
    body: ""  //paragraph of article text

}
//fixed expect before render
test('renders component without errors', () => {
    expect(() => render(<Article />));
});

//headline render working when passed thru props
test('renders headline, author from the article when passed in through props', () => {

    render(<Article article={TestArticle}/>);
    
    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');
 
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();

});
//renders AP by default
test('renders "Associated Press" when no author is given', () => {

    render(<Article article={TestArticle} />);
    const author = screen.queryByTestId('author');
    expect(author).toHaveTextContent(/Associated Press/i);

});
//handledelete working :)
test('executes handleDelete when the delete button is pressed', () => {

    const handleDelete = jest.fn();
    render(<Article article={TestArticle} handleDelete={handleDelete}/>);
    const deleteBtn = screen.queryByTestId('deleteButton');
    userEvent.click(deleteBtn);
    expect(handleDelete).toHaveBeenCalled();

});


//Task List:
//1. Complete all above tests. Create test article data when needed. DOne