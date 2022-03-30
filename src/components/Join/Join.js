import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'

const Join = () => {
  const [name,setName] = useState('');
  const [room,setRoom] = useState('');
  const [isErr,setIsErr] = useState(false);

  const handleSignIn = (e) =>{
    if(!name || !room){
      e.preventDefault();
      setIsErr(true);
    }
  }

  
  return (
    <section className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className='heading'>Chat</h1>
        <div className='joinInputWrap'>
          <input type="text" 
          placeholder=''
           className='joinInput' onChange={e => setName(e.target.value) }/>
        </div>
        <div className='joinInputWrap'>
          {/* <input type="text" 
          placeholder=''
           className='joinInput' onChange={e=> setRoom(e.target.value)}/> */}
           <select name="room" defaultValue="DEFAULT" className="joinInput" id="room" onChange={e=> setRoom(e.target.value)}>
             <option value="DEFAULT" disabled>Choose Room</option>
             <option value="miit">MIIT</option>
             <option value="sport">Sport</option>
             <option value="programming">Programming</option>
             <option value="physics">Physics</option>
             <option value="artificialIntelligence">Artificial Intelligence</option>
           </select>
        </div>

        {isErr ? <p className='errMessage'>Username and Room must be Provided!</p>:''}
        
        <Link onClick={handleSignIn} to={`/chat?name=${name}&room=${room}`}>
          <button className='button'> Sign In</button>
        </Link>
      </div>
    </section>
  )
}

export default Join