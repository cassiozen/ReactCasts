import {useState, useEffect} from 'react';
import {db} from './db.server';

export default function BookDetails({tags, currentBook}) {
  const similarBooks = db.query(
    'select * from books where tags && $1 AND NOT id = $2',
    [tags, currentBook]
  ).rows;
  return (
    <div className="similar">
      <h3>You might also like:</h3>
      {similarBooks.map((similar) => (
        <img
          key={similar.id}
          src={similar.image}
          alt={similar.name}
          className="similar_cover"
        />
      ))}
    </div>
  );
}
