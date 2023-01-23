import React from 'react';
import Label from '../../components/Label';
import ContactPage from '../../pages/ContactPage';
import './style.css';

function Main() {
  return (
    <main>
      <Label text="Contact Us"></Label>
      <ContactPage></ContactPage>
      <div></div>
    </main>
  )
}

export default Main;