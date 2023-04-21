import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './components/elements/SearchBar';
import StockMusique from './components/body/listeMusique';
import { BrowserRouter as Router } from 'react-router-dom';

const stocks = require("./components/data/musique.json");

const StockListWithSearch = SearchBar(StockMusique, (item, searchTerm) => {
  return item.nomMusique.indexOf(searchTerm) >= 0;
});

describe('SearchBar component', () => {
  test('should filter the data when search term is entered', () => {
    const StockListWithSearch = SearchBar(StockMusique, (item, searchTerm) => {
      return item.nomMusique.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    });
    
    const { getByText, getByPlaceholderText } = render(
      <Router>
      <StockListWithSearch data={stocks} />
    </Router>
    );
    const searchInput =getByPlaceholderText('Recherche');

   // expect(getByText('testation')).toBeInTheDocument();
     expect(getByText('Fishium')).toBeInTheDocument();
      expect(getByText('RIP')).toBeInTheDocument();
    //expect(getByText('Jane')).toBeInTheDocument();
    // the search term is not working
    
    fireEvent.change(searchInput, { target: { value: 'Fishium' }.value });
   // fireEvent.change(searchInput, { target: { value: 'RIP' }.value });
    console.log(searchInput.value);
    expect(getByText('Fishium')).toBeInTheDocument();
    expect(getByText('RIP')).toBeInTheDocument();
    //expect(getByText('Jane')).toBeInTheDocument();
  });
});
