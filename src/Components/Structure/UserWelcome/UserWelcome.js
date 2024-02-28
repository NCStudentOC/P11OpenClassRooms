import React, { useState, useEffect } from 'react';
import './UserWelcome.css';
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfileThunk } from '../../../Redux/UserProfile'
import { updateUserNameThunk } from '../../../Redux/UserProfile'
import { Toast } from 'colorfultoasts';


export function UserWelcome() {
  const user = useSelector((state) => state.user)
  console.log(user);

  const dispatch = useDispatch()

  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const [newUserName, setnewUserName] = useState('')

  const firstName = useSelector((state) => state.userProfile.firstName)
  const lastName = useSelector((state) => state.userProfile.lastName)


  useEffect(() => {
    setToken(localStorage.getItem('token') || sessionStorage.getItem('token'));

    if (token) {
      dispatch(getUserProfileThunk(token));
    }
  }, [token]); // Ajout de token comme dépendance

  const [editOn, setEditOn] = useState(false);

  const EditFormON = () => {
    setEditOn(true)
  }
  const EditFormOff = () => {
    setEditOn(false);
  };

  const [toast, setToast] = useState({ type: '', message: '', show: false });

  const handleEditUserName = (e) => {
    e.preventDefault();

    if (newUserName === '') {

      setToast({ type: 'error', message: 'Le champ username ne peut être vide', show: true });

    } else {

      dispatch(updateUserNameThunk({ token, newUserName })).then((result) => {
        console.log(result); // Add this line
        if (result.payload) {

          EditFormOff();
          setToast({ type: 'success', message: 'Mise à jour de l\'username réussie ! ', show: true });

          // Ajoutez un délai avant de fermer le formulaire
          setTimeout(() => {
            EditFormOff();
          }, 5000); // Ferme le formulaire après 5 secondes



        }
      }).catch((error) => {
        // Gérer l'erreur, par exemple afficher un message à l'utilisateur
        console.error('Une erreur s\'est produite :', error);
      });
    }
  };

  const handleCloseToast = () => {
    setToast({ ...toast, show: false });
  };


  return (


    <div>
      {editOn ? (
        <div className='edit_form'>
          <div className="edit_form_container">
            <h1>
              Edit user info
            </h1>
            <form className='form_username' onSubmit={handleEditUserName}>
              <div className="input_container">
                <label htmlFor="newUserName"> User name: </label>
                <input
                  type="text"
                  id='newUserName'
                  value={newUserName}
                  onChange={(e) => setnewUserName(e.target.value)}
                />
              </div>

              <div className="input_container">
                <label htmlFor="firstName">Firstname: </label>
                <input
                  type="text"
                  id='firstName'
                  defaultValue={firstName}
                  readOnly
                  disabled
                />
              </div>
              <div className="input_container">
                <label htmlFor="lastName">Lastname: </label>
                <input
                  type="text"
                  id='lastName'
                  defaultValue={lastName}
                  readOnly
                  disabled
                />
              </div>
              <div className="form_btn">
                <button type='submit'>Save</button>
                <button onClick={EditFormOff}>Cancel</button>
              </div>


            </form>
          </div>

        </div>

      )
        :
        (
          <div>
            <div className="header">
              <h1>Welcome back<br />{user ? `${firstName} ${lastName}` : ''}</h1>
              <button className="edit-button" onClick={EditFormON}>Edit Name</button>
            </div>


          </div>

        )
      }
      {toast.show && <Toast type={toast.type} message={toast.message} onClose={handleCloseToast} position={{ bottom: '20px', right: '20px' }} />}
    </div>
  )
}