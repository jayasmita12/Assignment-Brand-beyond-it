import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Button, Heading, Alert, AlertIcon, Text } from "@chakra-ui/react"
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"

export const Register = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState()
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const config={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            // https://brand-beyond-authentication.herokuapp.com/api/user/register
            const {data:res} = await axios.post("https://brand-beyond-authentication.herokuapp.com/api/user/register",data,config)
            console.log(res.message)
            setSuccess(res.message)
            navigate("/login")
            localStorage.setItem("userInfo", JSON.stringify(data))
        } catch (error) {
            if(error.response.status <= 500){
                setSuccess("User Created Successfully");
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            }
            else if (error.response.status === 400){
                setError("Can;t use duplicate email")
                setTimeout(()=>{
                    setError("")
                },2000)
            }
            else{

                setError(error.response.data.message)
            }
        }
        // const url = "https://brand-beyond-authentication.herokuapp.com/api/users/register";
        // const res = await axios.post(url, data)
        // console.log(res)
        //     .then(res => {
        //         // setData(res.data.data)
        //         console.log(res.data)
        //         setError(false)
        //         setSuccess(true)
        //     })
        //     .catch(err => {
        //         setError(true)
        //         setSuccess(false)
        //         console.log(err.message)
        //         setData({
        //             firstname: "",
        //             lastname: "",
        //             email: "",
        //             password: ""
        //         })
        //     })
    }
    return (
        <div style={{ width: "40%", margin: "auto", marginTop: "40px" }}>
            <Heading style={{ color: "teal", display: "flex", lineHeight: "3" }}>Register-Form</Heading>
            {error && <Alert status='error'>
                <AlertIcon />
                {error}
            </Alert>}
            {success && <Alert status='success'>
                <AlertIcon />
                {success}
            </Alert>}
            <form onSubmit={handleSubmit}>
            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input type='text' placeholder='First name' name="firstname" onChange={handlechange} value={data.firstname} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input type='text' placeholder='Last name' name="lastname" onChange={handlechange} value={data.lastname} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Email' name="email" onChange={handlechange} value={data.email} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' name="password" onChange={handlechange} value={data.password} />
            </FormControl>
            <Button style={{ display: "flex", marginTop: "30px" }} type="submit" colorScheme='teal' >
                Signup
            </Button>
            <Text>User Already Register ? <Link style={{color:"blue"}} to="/login">login</Link></Text>
            </form>
        </div>
    )
}
