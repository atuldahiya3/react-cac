import  { useEffect, useState } from 'react'

function Github() {

  const [data,setData]=useState([])
  
  useEffect(()=>{
    fetch('https://api.github.com/users/atuldahiya3')
    .then(res=>res.json())
    .then(res=> {
        console.log(res);
        setData(res)
    })
  },[])

  return (
    <div className='text-center m-4 text-gray-800 bg-green-200 text-3xl'>
      GitHub Username: {data.login}
    </div>
  )
}

export default Github
