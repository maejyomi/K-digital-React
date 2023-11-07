import { useEffect, useState } from "react"
import ButtonBlue from "../comm/ButtonBlue"

const LoginForm = ({setUser}) => {

    const [inUser, setInUser] = useState();
    const [inPwd, setInPwd] = useState();

    const handleLogin = (e) => {
        e.preventDefault();

        if(inUser === "maejyomi@gmail.com" && inPwd === "1234"){
            localStorage.setItem("user",inUser)
            setUser(inUser);
        } else {
            alert("로그인 입력 오류");
        }

    }

    useEffect(()=>{
        console.log(inUser, inPwd);
    },[inUser, inPwd])

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-lg">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" required 
                                    onChange={(e)=>setInUser(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="name@company.com" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    placeholder="********" 
                                    onChange={(e)=>setInPwd(e.target.value)}
                                    required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <ButtonBlue caption='로그인' handleClick={handleLogin} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
