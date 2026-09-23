import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main className="site__main">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;