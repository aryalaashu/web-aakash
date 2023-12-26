import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { createUserApi, testApi } from '../apis/Api'
import { toast } from 'react-toastify'

const Register = () => {
  // useState (Setting input value)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  // function for changing input value
  const changeFirstname = (e) => {
    setFirstName(e.target.value)
  }

  const changeLastname = (e) => {
    setLastName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  // function for button
  const handleSubmit = (e) => {
    e.preventDefault()
    // check if input value is available
    console.log(firstName, lastName, email, password)

    // making json data object
    const data = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      password : password
    }

    // making API Call
    createUserApi(data).then((res) => {
      if(res.data.success == false){
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
      }
    }).catch(err => {
      toast.error("Server Error")
      console.log(err.message)
    })



  }

  return (
    <>
      <h1 className='m-4'>Create your Account!</h1>
      
      <form className='m-4 w-25'>
        <label>Firstname</label>
        <input onChange={changeFirstname} type="text" className='form-control mb-2' placeholder='Enter your firstname' />

        <label>Lastname</label>
        <input onChange={changeLastname} type="text" className='form-control mb-2' placeholder='Enter your lastname' />

        <label>Email Address</label>
        <input onChange={changeEmail} type="email" className='form-control mb-2' placeholder='Enter your email' />

        <label>Password</label>
        <input onChange={changePassword} type="password" className='form-control mb-2' placeholder='Enter your password' />

        <button onClick={handleSubmit} className='btn btn-danger w-100'>Create an Account</button>

        <a href="" className='text-black text-decoration-none'>Already have account?</a>

      </form>
    </>
  )
}

export default Register
