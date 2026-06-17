import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Layout = () => {
    return (
        <div className="h-full w-full flex flex-col items-center bg-black text-white">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Layout