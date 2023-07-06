import React, { useState } from 'react';
import user, { updateProfile, updatePassword, toggleTwoFactorAuth } from '../../services/user';
import auth from "../../services/auth";

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [password, setPassword] = useState('');
const [isTwoFactorAuthEnabled, setIsTwoFactorAuthEnabled] = useState(false);

class ProfileSettings extends React.Component{
  componentDidMount(){
    user.getUsers().then((response) => {
      this.setState({users: response.data})
    });
  }

  componentDidMount(){
    user.updateUser().then((response) => {
      this.setState({users: response.data})
    });
  }
}



const handleUpdateProfile = async (e) => {
  e.preventDefault();
  try {
    await updateProfile(firstName, lastName);
    // Display success message or perform necessary actions upon profile update
  } catch (error) {
    // Handle profile update error
  }
};

const handleUpdatePassword = async (e) => {
  e.preventDefault();
  try {
    await updatePassword(password);
    // Display success message or perform necessary actions upon password update
  } catch (error) {
    // Handle password update error
  }
};

const handleToggleTwoFactorAuth = async () => {
  try {
    await toggleTwoFactorAuth();
    setIsTwoFactorAuthEnabled(!isTwoFactorAuthEnabled);
    // Display success message or perform necessary actions upon two-factor authentication toggle
  } catch (error) {
    // Handle two-factor authentication toggle error
  }
};

export default ProfileSettings;
