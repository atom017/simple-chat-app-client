import React from 'react'
import './OnlineUsers.css'

const OnlineUsers = ({users}) => {
  
  return (
    <div className='usersContainer'>
      <header className='onlineHeader'>
        Online
        
      </header>
      {users ? 
      (
        <ul className='userList'>
          {users.map((user,i) => (<li key = {i} className="userItem">
          <i className="fa-solid fa-user profileImg"></i>{user.name}
          </li>)
          )}
        </ul>
      ):
      ''
      }
    </div>
  )
}

export default OnlineUsers