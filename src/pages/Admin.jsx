import React from 'react'
import '../style/admin.css'
const Admin = () => {
  return (
    <div className='admin' id='admin'>
     <h1>Welcome to The Admin Dashboard</h1>
     <div>
        <input type="text" placeholder='Login ID' /> <br />
        <input type="text" placeholder='Password' /> <br />
        <button className='btn'>Sign in</button>
     </div>

    </div>
  )
}

export default Admin
