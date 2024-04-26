import axios from 'axios'
import React from 'react'

const App = () => {
  const getData = async  () => {  
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(data)  
    } catch (error) {
      console.log(error)
    }
  } 
  return (
    <div>
      <h1>API CALLING</h1>
       <button onClick={ getData} style={{padding: "1vw", backgroundColor: "blue", color: "white", border: "none", borderRadius: "10px", cursor: "pointer"}}>Get Users</button>
    </div>
  )
}

export default App
