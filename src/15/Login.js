import { useState, useEffect } from "react"
import LoginForm from "./LoginForm"
import Loginout from "./Loginout"

const Login = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        setUser(localStorage.getItem("user"))
    },[])

    return (
        <main className="container">
            {
                user
                ? <Loginout user={user} setUser={setUser}/>
                : <LoginForm setUser={setUser}/>
            }

        </main>
    )
}

export default Login
