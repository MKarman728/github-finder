import React from 'react'
import UserResults from '../components/users/UserResults'

function Home() {
  const test = `${process.env.REACT_APP_GITHUB_TOKEN}`
  console.log(test);
  return (
    <div>
        <UserResults />

        
    </div>
  )
}

export default Home