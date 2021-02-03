import {useState, useRef, useEffect, unstable_useTransition} from 'react';

import {useSelectedBook} from './SelectedBookContext.client';

import SelectSearch from 'react-select-search';

export default function BookList({books}) {
  const [selectedBook, setSelectedBook] = useSelectedBook();
  const [startTransition, isPending] = unstable_useTransition();
  return (
    <SelectSearch
      placeholder="Select a Book"
      options={books}
      onChange={(e, selected) => {
        startTransition(() => {
          setSelectedBook(() => ({
            selectedId: selected.value,
          }));
        });
      }}
      search
    />
  );
}
