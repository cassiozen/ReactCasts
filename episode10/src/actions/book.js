import { 
  BOOK_REQUESTING, BOOK_SUCCESS, BOOK_FAILURE, SIMILAR_REQUESTING, SIMILAR_SUCCESS, SIMILAR_FAILURE
} from '../constants';

const entryLoading = id => ({ type: BOOK_REQUESTING, payload: id });
const entryLoaded = book => ({ type: BOOK_SUCCESS, payload: book });
const entryLoadError = () => ({ type: BOOK_FAILURE });

export const requestBook = id => (
  (dispatch, getState, api) => {
    dispatch(entryLoading(id));
    return api.fetchBook(id)
    .then(book => {
      dispatch( entryLoaded(book) );
      return book;
    })
    .catch(err => {
      dispatch( entryLoadError() );
    });
  }
);

const similarEntriesLoading = tags => ({ type: SIMILAR_REQUESTING, payload: tags });
const similarEntriesLoaded = books => ({ type: SIMILAR_SUCCESS, payload: books });
const similarEntriesLoadError = () => ({ type: SIMILAR_FAILURE });

export const requestBooksByTags = (id, tags) => (
  (dispatch, getState, api) => {
    dispatch(similarEntriesLoading(tags));
    api.fetchBooksByTags(tags)
    .then(books => {
      dispatch( similarEntriesLoaded(books.filter(p => p.id !== id)) );
    })
    .catch(err => {
      dispatch( similarEntriesLoadError() );
    });
  }
);


export const requestBookAndSimilars = (id) => (
  dispatch => {
    dispatch(requestBook(id)).then(book => dispatch(requestBooksByTags(id, book.tags)));
  }
)
