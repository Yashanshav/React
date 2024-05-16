
import { useParams } from 'react-router-dom'

function User() {

    const {userId} = useParams()
    
  return (
    <div className='bg-orange-700 text-black text-3xl'>User: {userId}</div>
  )
}

export default User