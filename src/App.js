import React, { useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from './store/user'

const App = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  const initialUserState = {
    username: "",
    password: ""
  };
  const [userForm, setUserForm] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(userForm)) 
  }
    return (
      <div>
      { user ? 
        <>
          <div>
            Hi, {user.username}!
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        </>
      :
      <>
      <div>
          {
            <form onSubmit={handleSubmit}>
              <input type="text" name="username" onChange={handleInputChange}/>
              <input type="password" name="password" onChange={handleInputChange}/>
              <button type="submit" >Login</button>
            </form>
          }
      </div>
      </>
    }
    </div>
  );
}

export default App;
