import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const {user}=useContext(UserContext)
    
   if(!user) return <div className='text-red-500 text-lg text-center'>please login</div>
   return <div className='text-green-600 text-lg'>Welcome {user.username}</div>
}

export default Profile