import React from 'react';
import CokctailList from '../components/CokctailList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  console.log('welcome to the cocktail db');

  return (
    <main>
        <SearchForm />
        <CokctailList />
    </main>
  )
}

export default Home;