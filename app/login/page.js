"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function login(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function login(e){
e.preventDefault()

if(email==="admin@akhlak.com" && password==="123456"){
router.push("/dashboard")
}else{
alert("Email atau password salah")
}

}

return(

<div style={{padding:"40px"}}>

<h2>Login Sistem</h2>

<form onSubmit={login}>

<input
placeholder="email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Login</button>

</form>

</div>

)

}
