import React from 'react'
import './OnlineUsers.css'

const OnlineUsers = ({users,activeOpen,setActiveOpen}) => {
  
  return (
    <div className={activeOpen ? 'usersContainer active':'usersContainer'}>
      <header className='onlineHeader'>
        <h4>Active</h4>
        {activeOpen ?<i onClick={() => setActiveOpen(false)} className="fa-solid fa-circle-xmark"></i>: null}
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