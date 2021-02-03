import {useState, useEffect} from 'react';
import SimilarBooks from './SimilarBooks.server';
import BuyButton from './BuyButton.client';
import {db} from './db.server';

export default function BookDetails({id}) {
  const book = db.query('select * from books where id = $1', [id]).rows[0];
  return (
    <div className="segment">
      <img src={book.image} alt={book.title} className="cover" />
      <h1>
        {book.series && <span className="bookseries">{book.series}: </span>}
        {book.title}
      </h1>
      <h2>By {book.author}</h2>
      {book.tags?.map((tag) => (
        <div className="tag" key={tag}>
          {tag}
        </div>
      ))}
      <BuyButton id={id} />

      <SimilarBooks tags={book.tags} currentBook={book.id} />
    </div>
  );
}
