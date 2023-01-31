import React from 'react';
import Label from '../../components/Label';
// import ContactPage from '../../pages/ContactPage';
// import PasswordSuggestionsPage from '../../pages/PasswordSuggestionsPage';
// import UserRegisterPage from '../../pages/userRegisterPage';
import TestPasswordPage from '../../pages/TestPasswordPage';
import './style.css';

function Main() {
  return (
    <main>
      <Label text="Check Your Password Strength"></Label>
      <TestPasswordPage></TestPasswordPage>
      {/* <UserRegisterPage></UserRegisterPage> */}
      {/* <PasswordSuggestionsPage></PasswordSuggestionsPage> */}
      {/* <ContactPage></ContactPage> */}
    </main>
  )
}

export default Main;