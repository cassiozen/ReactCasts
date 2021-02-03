/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

const fs = require('fs');
const path = require('path');
const {Pool} = require('pg');
const {readdir, unlink, writeFile} = require('fs/promises');
const startOfYear = require('date-fns/startOfYear');
const credentials = require('../credentials.json');
const pool = new Pool(credentials);

const now = new Date();
const startOfThisYear = startOfYear(now);
// Thanks, https://stackoverflow.com/a/9035732
function randomDateBetween(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const dropTableStatement = 'DROP TABLE IF EXISTS books;';
const createTableStatement = `CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  series TEXT,
  title TEXT,
  author TEXT,
  image TEXT,
  tags TEXT []
);`;
const insertBookStatement = `INSERT INTO books(series, title, author, image, tags, created_at, updated_at)
  VALUES ($1, $2, $3, $4, $5, $6, $6)
  RETURNING *`;
const seedData = [
  [
    'Harry Potter',
    "Harry Potter and the Philosopher's Stone",
    'Nevermind...',
    `/books/harrypotter.jpg`,
    ['fantasy', 'magic', 'puberty'],
    randomDateBetween(startOfThisYear, now),
  ],
  [
    'Lord of the Rings',
    'The fellowship of the Ring',
    'J. R. R. Tolkien',
    `/books/lotr.jpg`,
    ['fantasy', 'magic', 'jewelry'],
    randomDateBetween(startOfThisYear, now),
  ],
  [
    'Game of Thrones',
    'A Song of Ice and Fire',
    'George R. R. Martin',
    `/books/gameofthrones.jpg`,
    ['fantasy', 'killing everyone you will care about'],
    randomDateBetween(startOfThisYear, now),
  ],
  [
    'Sherlock Holmes',
    'The adventures of Sherlock Holmes',
    'Arthur Conan Doyle',
    `/books/sherlockholmes.jpg`,
    ['detective', 'crime', 'drug abuse'],
    randomDateBetween(startOfThisYear, now),
  ],
  [
    null,
    'Murder on the Orient Express',
    'Agatha Cristie',
    `/books/murderorient.jpg`,
    ['detective', 'crime', 'tourism'],
    randomDateBetween(startOfThisYear, now),
  ],
  [
    null,
    'Neuromancer',
    'William Gibson',
    `/books/neuromancer.jpg`,
    ['science fiction', 'matrix', 'cowboys'],
    randomDateBetween(startOfThisYear, now),
  ],
  [
    null,
    'Ready Player One',
    'Ernest Cline',
    `/books/readyp1.jpg`,
    ['science fiction', 'matrix', 'insert coin'],
    randomDateBetween(startOfThisYear, now),
  ],
];

async function seed() {
  await pool.query(dropTableStatement);
  await pool.query(createTableStatement);
  const res = await Promise.all(
    seedData.map((row) => pool.query(insertBookStatement, row))
  );
}

seed();
