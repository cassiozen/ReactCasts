/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Suspense} from 'react';
import BookList from './BookList.server';
import BookDetails from './BookDetails.server';

export default function App({selectedId}) {
  return (
    <div>
      <h1>📚React Bookstore (Server Components)</h1>

      <Suspense fallback={<p>Loading Book list...</p>}>
        <BookList />
      </Suspense>

      <Suspense fallback={<p>Loading Book details...</p>}>
        {selectedId && <BookDetails id={selectedId} />}
      </Suspense>
    </div>
  );
}
