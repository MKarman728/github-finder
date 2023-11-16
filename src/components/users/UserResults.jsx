import {useEffect} from 'react'

function UserResults() {
    useEffect(()=>{
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch(`https://api.github.com/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
    }
  return (
    <div>UserResults</div>
  )
}

export default UserResults