import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import EntryList from './EntryList';
import { getEntryList } from '../../services/entry';

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entryList = await getEntryList();
        setEntries(entryList);
      } catch (error) {
        // Handle error
      }
    };

    fetchEntries();
  }, []);

  const handleLogout = () => {
    // Implement logout functionality
  };

  const handleCreateEntry = () => {
    // Implement create entry functionality
  };

  const handleProfileSettings = () => {
    // Implement profile settings navigation
  };

  return (
    <div>
      <Sidebar
        handleLogout={handleLogout}
        handleCreateEntry={handleCreateEntry}
        handleProfileSettings={handleProfileSettings}
      />
      <EntryList entries={entries} />
    </div>
  );
};

export default Dashboard;
