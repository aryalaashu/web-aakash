import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { testApi } from '../apis/Api'

const Homepage = () => {

  useEffect(() => {
    testApi().then((res) => {
      console.log(res)
    })
  },[])

  return (
    <div>
        <h1>Welcome to homepage!</h1>
    </div>
  )
}

export default Homepage
