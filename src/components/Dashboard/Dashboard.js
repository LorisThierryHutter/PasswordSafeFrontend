import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import EntryList from './EntryList';
import auth from "../../services/auth";


class Dashboard extends React.Component{

  componentDidMount(){
    auth.getDashboard().then((response) => {
      this.setState({entries: response.data})
    });
  }

  render() {
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
  }
}

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
export default Dashboard;
