import { Link } from 'react-router-dom'
import argentBankLogo from '../../../Images/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfileThunk } from '../../../Redux/UserProfile'


const logout = () => {
  return {
    type: 'LOGOUT'
  };
};


export function Header() {
  const dispatch = useDispatch();

  // TEST DU STATE
  const user = useSelector((state) => state.user); // accéder à l’état actuel de l’utilisateur
  console.log(user);

  const [token, setToken] = useState(localStorage.getItem('token') || null);;

  const userName = useSelector((state) => state.userProfile.userName)
  console.log(userName)

  useEffect(() => {

    setToken(localStorage.getItem('token') || sessionStorage.getItem('token'));
    if (token) {
      dispatch(getUserProfileThunk(token))
      console.log(userName)
    }
  }, [token, userName])


  const handleSignOut = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token')
    dispatch(logout());
    setToken(null);
    window.location = '/';

  };



  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {token !== null ? (
            <>
              <Link to="/user" className='main-nav-item'>
                <FontAwesomeIcon icon={faUserCircle} />
                {userName}
              </Link>
              <Link to="/" className='main-nav-item' onClick={handleSignOut} >
                <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
              </Link>
            </>
          ) : (
            <Link to="/SignIn" className='main-nav-item'>
              <FontAwesomeIcon icon={faUserCircle} /> Sign In
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}