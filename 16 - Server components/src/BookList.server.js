/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {db} from './db.server';
import ClientBookList from './BookList.client';

export default function BookList({selectedId, isEditing}) {
  const books = db.query(`select id, series, title from books order by id asc`)
    .rows;

  return (
    <ClientBookList
      books={books.map((book) => ({
        name: book.series || book.title,
        value: book.id,
      }))}
    />
  );
}
