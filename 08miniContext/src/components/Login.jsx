import  { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div className='text-center'>
      <h2 className='text-3xl'>login</h2>
      <input className='border-4 p-2' type='text' value={username} onChange={(e)=> setusername(e.target.value)} placeholder='username' />
      <input className='border-4 p-2' type='text' value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='password' />
      <button className='border-4 p-2' onClick={handleSubmit}>submit</button>

    </div>
  )
}

export default Login
