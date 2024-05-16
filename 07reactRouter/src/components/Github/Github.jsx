

import { useLoaderData } from 'react-router-dom'

function Github() {
    
  const data = useLoaderData()
    // const [data, setData] = React.useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Yashanshav')
    //    .then((res) => res.json())
    //    .then((res) => {
    //     console.log(res.name)
    //     setData(res)
    // });

    //   //  console.log(data);
    // }, [data]);]

    function changeDate(date) {
      console.log("changeDate was called");
      return new Date(date).toDateString();
    }

  return (
    <>
    <div className='flex text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
      <img src={data.avatar_url} width= {300}></img>
      <div className='text-left text-black text-3xl ml-8'>
      <ul>
        <li>Name: {data.name}</li>
        <li>Bio: {data.bio}</li>
        <li>Followers: {data.followers}</li>
        <li>Following: {data.following}</li>
        <li>Public Repos: {data.public_repos}</li>
        <li>Public Gists: {data.public_gists}</li>
        <li>Company: {data.company}</li>
        <li>Location: {data.location}</li>
        <li>Created At: {changeDate(data.created_at)}</li>
        <li>Updated At: {changeDate(data.updated_at)}</li>
      </ul>
      </div>
      
    </div>
    </>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/Yashanshav');
  return response.json();
}