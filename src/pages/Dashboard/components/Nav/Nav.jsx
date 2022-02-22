import React from 'react'
import useUser from '../../../../useUser';
import './Nav.css'
function Nav() {
  const {user, setUser} = useUser();
    console.log(user['name'])
  return (
      <>
      <div className="nav-section">
        <div className="header">
        <h1 className="navheader">{'Hi ' +user['name'] ??  'User'} </h1>        
        <p className="nav-p">Welcome to <span>BUY ENERGY</span></p>
        </div>
        
      </div>
      </>
  )
}

export default Nav