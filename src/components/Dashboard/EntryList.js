import React from 'react';
import Entry from './Entry';

const EntryList = ({ entries }) => {
  return (
    <div>
      <h2>Entry List</h2>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default EntryList;
