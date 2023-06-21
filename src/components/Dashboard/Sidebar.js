import React from 'react';

const Sidebar = ({ handleLogout, handleCreateEntry, handleProfileSettings }) => {
  return (
    <div>
      <ul>
        <li onClick={handleLogout}>Log Out</li>
        <li onClick={handleProfileSettings}>Profile Settings</li>
        <li onClick={handleCreateEntry}>Create New Entry</li>
      </ul>
    </div>
  );
};

export default Sidebar;
