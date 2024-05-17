import { useContext } from 'react'
import Context from '../Context/Context'

function Profile() {

    const {user} = useContext(Context)
    if(!user) return <h1>Not logged in </h1>
  return (
    <h1>Profile: {user.username}</h1>
  )
}

export default Profile