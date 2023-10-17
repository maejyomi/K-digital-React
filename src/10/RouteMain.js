import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"

const RouteMain = () => {
    return (
        <BrowserRouter>
            <main className="container">
            <h1 className="text-2xl font-bold m-5 my-10 text-center">react-route-dom으로 라우팅</h1>
                <RouteNav />
                <Routes>
                    <Route path="/" element={<RouteHome />}></Route> {/* RouteHome으로 라우팅 */}
                    <Route path="/page1/:item" element={<RoutePage1 />}></Route> {/* 주소/page1 하면 RoutePage1로 라우팅 */}
                    <Route path="/page2" element={<RoutePage2 />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default RouteMain
