import { useParams } from 'react-router-dom'


function User() {
    const {userId}=useParams()
  return (
    <div className='text-center'>
      user:{userId}
    </div>
  )
}

export default User
