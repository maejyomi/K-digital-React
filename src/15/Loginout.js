import ButtonBlue from "../comm/ButtonBlue"

const Loginout = ({ user, setUser }) => {
    const handleLogOut = () =>{
        localStorage.removeItem("user");
        setUser(null);
    }
    return (
        <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-lg">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="max-w-[525px] mx-auto">
                        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-6">
                            로그아웃
                        </h2>
                            <form>
                                <div className="w-full rounded-md mb-6 text-center">
                                    {user}님 반갑습니다.
                                </div>
                                <div className="mb-10">
                                    <ButtonBlue caption="로그아웃" handleClick={handleLogOut}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Loginout
