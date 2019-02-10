
const initialState = {
  books: [
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
  ]
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };

    default:
      return state;
  }
};

export default reducer;