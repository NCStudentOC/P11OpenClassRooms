import React, { useState, useEffect } from 'react';
import { FormSignIn } from '../Components/Structure/FormSignIn/FormSignIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../Components/Structure/Header/Header';
import { Toast } from 'colorfultoasts';

export function SignIn() {
  const [toast, setToast] = useState({ type: '', message: '', show: false });
  return (
    <>
      {/* <Header /> */}
      <main className="main bg-dark">

        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>
          <FormSignIn />

        </section>

      </main>
    </>
  );
}



