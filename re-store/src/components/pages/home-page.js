import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: 'Test1',
      author: 'AuthorTest1'
    },
    {
      id: 2,
      title: 'Test2',
      author: 'AuthorTest2'
    }
  ];
  return (
    <BookList books={books}/>
  );
};

export default HomePage;